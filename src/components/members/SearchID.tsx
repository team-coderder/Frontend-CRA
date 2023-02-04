import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { BsSearch, BsPlusCircle } from 'react-icons/bs';
import { TextInput } from '..';
import { findByUsername } from '../../api';
import { onClickOutside, handleError } from '../../utils';
import { User } from '../../types';

type SearchProps = {
    width?: string;
    height?: string;
    handleAddMember: (member: User) => Promise<void>;
};
type ResultBoxProps = {
    onClick?: () => void;
    height?: string;
    missing?: boolean;
};

const SearchContainer = styled.div`
    position: relative;
    z-index: 2;
    margin-bottom: 10px;
`;
const ResultContainer = styled.div`
    max-height: 150px;
    overflow: auto;
    position: absolute;
    width: 100%;
`;
const ResultBox = styled.div<ResultBoxProps>`
    background-color: ${({ theme, missing }) =>
        !missing ? theme.color.main.light : theme.color.gray};
    height: ${({ height }) => height ?? 'auto'};
    padding: 5px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme, missing }) =>
            !missing ? theme.color.main.dark : theme.color.gray};
    }
    z-index: 2;
    box-shadow: 1px 5px 5px gray;
`;
const ResultId = styled.div`
    padding-left: 13px;
`;

const SearchID = ({ width, height, handleAddMember }: SearchProps) => {
    const [focus, setFocus] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const [searchName, setSearchName] = useState('');
    const [matchedUsers, setMatchedUsers] = useState<User[]>([]);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const findIds = async () => {
            if (!selected && searchName) {
                try {
                    const { data } = await findByUsername(searchName);
                    setMatchedUsers(data.members);
                } catch (e) {
                    handleError(e);
                }
            }
        };
        findIds();
    }, [selected, searchName]);

    useEffect(() => {
        function unFocus(event: MouseEvent): void {
            onClickOutside(event, searchRef, () => setFocus(false));
        }
        document.addEventListener('mousedown', unFocus);
        return () => document.removeEventListener('mousedown', unFocus);
    }, []);

    const handleClickAdd = async () => {
        if (matchedUsers.length && matchedUsers[0].username === searchName) {
            await handleAddMember(matchedUsers[0]);
        }
    };

    const handleClickMatch = (user: User) => {
        setSearchName(user.username);
        setMatchedUsers([user]);
        setSelected(true);
    };

    const handleChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value);
        setSelected(false);
    };

    return (
        <SearchContainer ref={searchRef} onFocus={() => setFocus(true)}>
            <TextInput
                width={width}
                height={height}
                placeholder="ID 검색"
                value={searchName}
                onChange={handleChangeSearchName}
            />
            <ResultContainer>
                {matchedUsers.length && focus
                    ? searchName &&
                      matchedUsers.map((user) => (
                          <ResultBox
                              onClick={() => handleClickMatch(user)}
                              height={height}
                              key={user.memberId}
                          >
                              <BsSearch />
                              <ResultId>{user.username}</ResultId>
                          </ResultBox>
                      ))
                    : focus && (
                          <ResultBox height={height} missing>
                              <BsSearch />
                              <ResultId>검색결과 없음</ResultId>
                          </ResultBox>
                      )}
            </ResultContainer>
            <BsPlusCircle
                size="18"
                style={{ cursor: 'pointer' }}
                onClick={handleClickAdd}
            />
        </SearchContainer>
    );
};

export default SearchID;
