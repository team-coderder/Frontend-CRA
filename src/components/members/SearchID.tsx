import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { BsPlusCircle } from 'react-icons/bs';
import { TextInput } from '..';
import { findByUsername } from '../../api';
import { onClickOutside, handleError } from '../../utils';
import { User } from '../../types';

type SearchProps = {
    handleAddMember: (member: User) => Promise<void>;
};

const SearchContainer = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
    display: flex;
`;

const ResultContainer = styled.div`
    position: absolute;
    top: 30px;
    width: 300px;
    max-height: 150px;
    overflow: auto;
`;

const ResultBox = styled.div<{ missing?: boolean }>`
    height: 30px;
    background-color: ${({ missing, theme }) =>
        missing
            ? theme.color.background.light.hover
            : theme.color.background.dark.main};
    color: ${({ missing, theme }) =>
        missing ? theme.font.color.main.dark : theme.font.color.main.light};
    padding: 5px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: ${({ missing }) => !missing && 'pointer'};
        background-color: ${({ theme, missing }) =>
            !missing && theme.color.background.dark.hover};
    }
`;

const SearchID = ({ handleAddMember }: SearchProps) => {
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
                margin="0 10px 0 0"
                placeholder="ID 검색"
                value={searchName}
                onChange={handleChangeSearchName}
            />
            <ResultContainer>
                {matchedUsers.length && focus
                    ? searchName &&
                      matchedUsers.map((user) => (
                          <ResultBox
                              key={user.memberId}
                              onClick={() => handleClickMatch(user)}
                          >
                              {user.username}
                          </ResultBox>
                      ))
                    : focus && <ResultBox missing>검색결과 없음</ResultBox>}
            </ResultContainer>
            <BsPlusCircle
                style={{
                    cursor: 'pointer',
                    margin: 'auto',
                }}
                onClick={handleClickAdd}
            />
        </SearchContainer>
    );
};

export default SearchID;
