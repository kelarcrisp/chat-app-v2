import React, { useContext } from 'react';
import { CRoomContext } from '../../../context/ChatRoomContext';
const ActiveUsers = () => {
    const { newestState, dispatch } = useContext(CRoomContext)
    console.log(newestState, 'in active users')
    return (
        <div>
            anything
        </div>
    );
};

export default ActiveUsers;