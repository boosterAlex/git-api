import axios from 'axios';
import { useEffect, useState } from 'react';
import Timer from '../timer/Timer';

const UserDetail = ({ selectedUser, value, setSelectedUser }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if (!!selectedUser) {
            axios
                .get(`https://api.github.com/users/${selectedUser}`)
                .then((res) => setUserDetails(res.data));
            setSeconds(60);
        }
    }, [selectedUser]);

    useEffect(() => {
        if (seconds < 1) {
            setUserDetails(null);
        }
    }, [seconds]);

    useEffect(() => setSelectedUser(value), [value]);

    return (
        <div>
            {userDetails && (
                <div>
                    <Timer
                        seconds={seconds}
                        onChange={setSeconds}
                        timerKey={userDetails.id}
                    />
                    <h2>{selectedUser}</h2>
                    <img src={userDetails.avatar_url} alt='' />
                    <br />
                    Login: {userDetails.login}
                    <br />
                    Followers: {userDetails.followers}
                </div>
            )}
        </div>
    );
};

export default UserDetail;
