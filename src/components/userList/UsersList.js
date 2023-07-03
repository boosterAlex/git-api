import { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = (props) => {
    const [users, setUsers] = useState([]);
    const { selectedUser, setSelectedUser, searchTerm } = props;

    useEffect(() => {
        axios
            .get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then((res) => setUsers(res.data.items));
    }, [searchTerm]);

    return (
        <ul>
            {users.map((user, i) => (
                <li
                    className={selectedUser === user.login ? 'selected' : ''}
                    key={i}
                    onClick={() => {
                        setSelectedUser(user.login);
                    }}
                >
                    {user.login}
                </li>
            ))}
        </ul>
    );
};

export default UsersList;
