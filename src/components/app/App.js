import { useState, useEffect } from 'react';
import './App.css';

import SearchPanel from '../searchPanel/SearchPanel';
import UsersList from '../userList/UsersList';
import UserDetail from '../userDetail/UserDetail';

const Github = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('boosterAlex');

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser;
        }
    }, [selectedUser]);

    return (
        <div className='App'>
            <SearchPanel value={searchTerm} setSearchTerm={setSearchTerm} />
            <UsersList
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                searchTerm={searchTerm}
            />
            <UserDetail
                setSearchTerm={setSearchTerm}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                value={searchTerm}
            />
        </div>
    );
};

export default Github;
