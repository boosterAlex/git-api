import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Github = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [tempSearch, setTempSearch] = useState('it-kamasutra');
    const [searchTerm, setSearchTerm] = useState('it-kamasutra');
    const [userDetails, setUserDetails] = useState([]);

    const fetchData = (term) => {
        axios
            .get(`https://api.github.com/search/users?q=${term}`)
            .then((res) => setUsers(res.data.items));
    };

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser;
        }
    }, [selectedUser]);

    useEffect(() => {
        axios
            .get(`https://api.github.com/search/users?q=${tempSearch}`)
            .then((res) => setUsers(res.data.items));
    }, [searchTerm]);

    useEffect(() => {
        if (!!selectedUser) {
            axios
                .get(`https://api.github.com/users/${selectedUser}`)
                .then((res) => setUserDetails(res.data));
        }
    }, [selectedUser]);

    return (
        <div className='App'>
            <div>
                <div>
                    <input
                        placeholder='search'
                        value={tempSearch}
                        onChange={(e) => {
                            setTempSearch(e.currentTarget.value);
                        }}
                    />{' '}
                    <button onClick={() => setSearchTerm(tempSearch)}>
                        Find
                    </button>
                </div>
                <ul>
                    {users.map((user, i) => (
                        <li
                            className={
                                selectedUser === user.login ? 'selected' : ''
                            }
                            key={i}
                            onClick={() => {
                                setSelectedUser(user.login);
                            }}
                        >
                            {user.login}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>{selectedUser}</h2>
                {userDetails && (
                    <div>
                        <img src={userDetails.avatar_url} alt='' />
                        <br />
                        Login: {userDetails.login}
                        <br />
                        Followers: {userDetails.followers}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Github;
