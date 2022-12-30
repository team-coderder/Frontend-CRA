import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';
import TextInput from '../TextInput';
import { findByUsername } from '../../api';

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
    height: 150px;
    overflow: auto;
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
const IconBox = styled.div`
    margin-left: 3px;
`;

type User = {
    id: number;
    username: string;
    nickname: string;
};

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
            {matchedUsers.length && focus
                ? searchId && (
                      <ResultContainer>
                          {matchedUsers.map((user: User) => (
                              <ResultBox
                                  onClick={() => setSearchId(user.username)}
                                  height={height}
                                  key={user.id}
                              >
                                  <IconBox>
                                      <BsSearch />
                                  </IconBox>
                                  <ResultId>{user.username}</ResultId>
                              </ResultBox>
                          ))}
                      </ResultContainer>
                  )
                : focus && (
                      <ResultBox height={height} missing>
                          <IconBox>
                              <BsSearch />
                          </IconBox>
                          <ResultId>검색결과 없음</ResultId>
                      </ResultBox>
                  )}
        </SearchContainer>
    );
};

export default SearchID;
