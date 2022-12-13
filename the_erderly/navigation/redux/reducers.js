import { SET_USER_ID } from "./action";
import { SET_FRIEND_ID } from "./action";
import { SET_SIGN } from "./action";

const initialState = {
    id: '',
    friendId: '',
    sign: '',
}

function userReducer(state = initialState, action){
    switch (action.type){
        case SET_USER_ID:
            return {...state, id: action.payload}
        case SET_FRIEND_ID:
            return {...state, friendId: action.payload}
        case SET_SIGN:
            return {...state, sign: action.payload}
        default:
            return state;
    }
}

export default userReducer;