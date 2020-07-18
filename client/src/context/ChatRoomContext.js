import React, { createContext, useReducer } from 'react';
export const CRoomContext = createContext();

const initialState = {
    messages: [],
    users: []
}
const roomReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return { ...state, users: [...state.users, action.payload.newUser] }

        }
        default: return { ...state }
    }

}
export const ChatRoomContext = (props) => {
    const [newestState, dispatch] = useReducer(roomReducer, initialState)
    return (
        <CRoomContext.Provider value={{ newestState, dispatch }}>
            {props.children}
        </CRoomContext.Provider>
    );
};

export default ChatRoomContext;