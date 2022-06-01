import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/actions'

const useUsers = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.users)

    console.log('users', users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (error) {
        return <h1>Error</h1>
    }

    return { users, loading, term, setTerm }
}

export default useUsers