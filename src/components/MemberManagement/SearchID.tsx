import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { BsSearch, BsPlusCircle } from 'react-icons/bs';
import { TextInput } from '..';
import { findByUsername } from '../../api';
import { onClickOutside } from '../../utils';
import { User } from '../../types';

type SearchProps = {
    width?: string;
    height?: string;
    space?: string;
    onClick?: () => void;
    focus?: boolean;
    missing?: boolean;
    searchId: string;
    setSearchId: React.Dispatch<React.SetStateAction<string>>;
    handleAddId: () => void;
};
type ResultBoxProps = {
    onClick?: () => void;
    height?: string;
    missing?: boolean;
};

const SearchContainer = styled.div<{ space: string | undefined }>`
    position: relative;
    z-index: 2;
    margin: ${({ space }) => space};
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

const SearchID = ({
    width,
    height,
    space,
    searchId,
    setSearchId,
    handleAddId,
}: SearchProps) => {
    const [focus, setFocus] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const [matchedUsers, setMatchedUsers] = useState<User[]>([]);

    useEffect(() => {
        const findIds = async () => {
            if (searchId) {
                try {
                    const { data } = await findByUsername(searchId);
                    setMatchedUsers(data.members);
                } catch (e) {
                    console.log(e);
                }
            }
        };
        findIds();
    }, [searchId]);

    useEffect(() => {
        function unFocus(event: MouseEvent): void {
            onClickOutside(event, searchRef, () => setFocus(false));
        }
        document.addEventListener('mousedown', unFocus);
        return () => document.removeEventListener('mousedown', unFocus);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchId(event.currentTarget.value);
    };

    return (
        <SearchContainer
            space={space}
            ref={searchRef}
            onFocus={() => setFocus(true)}
        >
            <TextInput
                width={width}
                height={height}
                placeholder="id검색"
                value={searchId}
                onChange={handleChange}
                color="white"
            />
            <ResultContainer>
                {matchedUsers.length && focus
                    ? searchId &&
                      matchedUsers.map((user) => (
                          <ResultBox
                              onClick={() => setSearchId(user.username)}
                              height={height}
                              key={user.id}
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
                onClick={handleAddId}
            />
        </SearchContainer>
    );
};

export default SearchID;
