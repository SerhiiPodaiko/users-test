import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    DELETE_USER,
    ADD_USER,
    EDIT_USER,
    SEARCH_USER
} from '../constants'

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, loading: true }
        case FETCH_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false }
        case FETCH_USERS_ERROR:
            return { users: [], loading: false, error: action.payload }
        case ADD_USER:
            return { ...state, users: [...state.users, ...action.payload] }
        case EDIT_USER:
            return { ...state, users: [...state.users, ...action.payload] }
        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload) }
        case SEARCH_USER:
            return { ...state, users: [...state.users.filter(user => user.includes(action.payload))] }
        default:
            return state
    }
}

export default userReducer