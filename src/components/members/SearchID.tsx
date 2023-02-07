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
    margin-bottom: 20px;
    display: flex;
`;
const InputBox = styled.div`
    margin-right: 10px;
`;
const ResultContainer = styled.div`
    max-height: 150px;
    overflow: auto;
    position: absolute;
    width: 300px;
`;
const ResultBox = styled.div<ResultBoxProps>`
color: ${({ missing }) => missing ? '#1B222D' : '#eee'};
background-color: ${({ missing }) => missing ? '#eee' : '#1B222D'};
    height: ${({ height }) => height ?? 'auto'};
    padding: 5px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme, missing }) =>
        !missing ? '#090B0F' : theme.color.gray};
    }
    z-index: 2;
    box-shadow: 1px 5px 5px gray;
    * ResultId {
        color: ${({ missing }) => missing ? '#1B222D' : '#eee'};
    }
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
            <InputBox>
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
            </InputBox>
            <BsPlusCircle
                size="18"
                style={{ cursor: 'pointer', lineHeight: '2.4em', margin: 'auto' }}
                onClick={handleClickAdd}
            />
        </SearchContainer>
    );
};

export default SearchID;
