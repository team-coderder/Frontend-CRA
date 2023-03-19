import { useState, useEffect, useRef } from 'react';
import { TextInput, Button } from '..';
import { findByUsername } from '../../api';
import { onClickOutside, handleError } from '../../utils';
import type { User, SearchIDProps } from '../../types';
import {
    SearchIDComponent,
    SearchResultsContainer,
    SearchResult,
    InputBox,
} from '../../styles/componentStyle';

const SearchID = ({ handleAddMember }: SearchIDProps) => {
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
                    console.log(e);
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
        <SearchIDComponent ref={searchRef} onFocus={() => setFocus(true)}>
            <InputBox>
                <TextInput
                    margin="0 10px 0 0"
                    placeholder="Search Id"
                    value={searchName}
                    onChange={handleChangeSearchName}
                >
                    <SearchResultsContainer>
                        {matchedUsers.length && focus
                            ? searchName &&
                            matchedUsers.map((user) => (
                                <SearchResult
                                    key={user.memberId}
                                    onClick={() => handleClickMatch(user)}
                                >
                                    {user.username}
                                </SearchResult>
                            ))
                            : focus && (
                                <SearchResult missing>
                                    No results
                                </SearchResult>
                            )}
                    </SearchResultsContainer>
                </TextInput>
                <Button onClick={handleClickAdd} inverse>
                    Invite
                </Button>
            </InputBox>
        </SearchIDComponent>
    );
};

export default SearchID;
