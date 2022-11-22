export const SET_USER_ID = 'SET_USER_ID';
export const SET_FRIEND_ID = 'SET_FRIEND_ID';

export const setId = id => dispatch => {
    dispatch({
        type: SET_USER_ID,
        payload: id,
    })
}
export const setFriendId = friendId => dispatch => {
    dispatch({
        type: SET_FRIEND_ID,
        payload: friendId,
    })
}