import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return{
                ...state, // takes the initial state
                user: action.user, // it adds new user
            }
        default:
            return state;
    }
}

export default userReducer;