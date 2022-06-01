import ServiceApi from '../api/Api'
import {ADD_USER, DELETE_USER, FETCH_USERS, FETCH_USERS_SUCCESS, SEARCH_USER} from '../constants'

const service = new ServiceApi()

export const fetchUsers = () => {
    return async function (dispatch) {
        try {
            const body = await service.getResource()

            dispatch({ type: FETCH_USERS, action: body })

            setTimeout(() => {
                dispatch({ type: FETCH_USERS_SUCCESS, payload: body })
            }, 1000) // Поклав затримку, щоб показати preloader (мінімальну анімацію)

        } catch (error) {
            dispatch({ type: FETCH_USERS_SUCCESS, action: error.message || 'Виникла помилка при загрузці користувачів!' })
        }
    }
}

export const addUser = (user) => {
    return async function (dispatch) {
        try {
            const body = await service.addUser(user)

            dispatch({ type: ADD_USER, payload: body })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteUser = (id) => {
    return async function (dispatch) {
        try {
            const body = await service.deleteUser(id)

            dispatch({ type: DELETE_USER, payload: body })

        } catch (e) {
            console.log(e)
        }
    }
}

export const searchUser = (value) => {
    return {
        type: SEARCH_USER,
        payload: value
    }
}