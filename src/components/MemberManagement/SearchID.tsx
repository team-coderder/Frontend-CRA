import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { BsSearch } from 'react-icons/bs';
import { TextInput } from '..';
import { findByUsername } from '../../api';
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
    focus,
    searchId,
    setSearchId,
}: SearchProps) => {
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchId(event.currentTarget.value);
    };

    return (
        <SearchContainer space={space}>
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
                      matchedUsers.map((user: User) => (
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
        </SearchContainer>
    );
};

export default SearchID;
