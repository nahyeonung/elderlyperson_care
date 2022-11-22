import { SET_USER_ID } from "./action";
import { SET_FRIEND_ID } from "./action";

const initialState = {
    id: '',
    friendId: '',
}

function userReducer(state = initialState, action){
    switch (action.type){
        case SET_USER_ID:
            return {...state, id: action.payload}
        case SET_FRIEND_ID:
            return {...state, friendId: action.payload}
        default:
            return state;
    }
}

export default userReducer;