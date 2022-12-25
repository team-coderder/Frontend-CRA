import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';
import theme from '../styles/theme';
import TextInput from './TextInput';
import { findByUsername } from '../api';

interface SearchProps {
    width?: string;
    height?: string;
    space?: string;
    onClick?: () => void;
    focus?: boolean;
    missing?: boolean;
    // error?: boolean;
}

const SearchContainer = styled.div<SearchProps>`
    position: relative;
    z-index: 2;
    /* height: 30vh; */
    margin: ${(props) => props.space};
`;
const ResultBox = styled.div<SearchProps>`
    background-color: ${(props) =>
        !props.missing ? theme.color.main.light : theme.color.gray};
    height: ${(props) => props.height};
    padding: 5px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: ${(props) =>
            !props.missing ? theme.color.main.dark : theme.color.gray};
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

const SearchID = ({ width, height, space, focus }: SearchProps) => {
    const [searchId, setSearchId] = useState('');
    const [matchedIds, setMatchedIds] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        const findIds = async () => {
            if (searchId) {
                try {
                    const { data } = await findByUsername(searchId);
                    const members = data.members.map((user) => {
                        return (
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
                        );
                    });
                    setMatchedIds(members);
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
            {matchedIds.length && focus
                ? searchId && matchedIds
                : focus && (
                      <ResultBox height={height} missing={true}>
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
