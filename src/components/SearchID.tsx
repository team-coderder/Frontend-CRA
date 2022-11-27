import styled from '@emotion/styled';
import React, { useRef, useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import theme from '../styles/theme';
import TextInput from './TextInput';

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

const dummy = [
    {
        user_id: '1',
        username: 'molisee123',
        nickname: 'molisee',
    },
    {
        user_id: '2',
        username: 'tousles22',
        nickname: 'jours',
    },
    {
        user_id: '3',
        username: 'tousl2',
    },
    {
        user_id: '4',
        username: 'dwdjjj',
    },
    {
        user_id: '5',
        username: 'asdf',
    },
];
const SearchID = ({ width, height, space, focus }: SearchProps) => {
    const [val, setVal] = useState('');

    const handleVal = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVal(event.currentTarget.value);
    };

    const items = dummy
        .filter((data) => {
            if (val == null) return data;
            else if (data.username.toLowerCase().includes(val.toLowerCase())) {
                return data;
            }
        })
        .map((data) => {
            return (
                <ResultBox
                    onClick={() => {
                        setVal(data.username);
                    }}
                    height={height}
                    key={data.user_id}
                >
                    <IconBox>
                        <BsSearch />
                    </IconBox>
                    <ResultId>{data.username}</ResultId>
                </ResultBox>
            );
        });

    return (
        <SearchContainer space={space}>
            <TextInput
                width={width}
                height={height}
                placeholder="id검색"
                value={val}
                onChange={handleVal}
                color="white"
            />
            {items.length && focus
                ? val && items
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
