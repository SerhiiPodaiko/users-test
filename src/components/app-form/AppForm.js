import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Button, TextField } from '@mui/material'
import useUsers from '../../hooks/useUsers'
import { searchUser } from '../../store/actions'

const AppForm = () => {
    const dispatch = useDispatch()
    const { term, setTerm } = useUsers()
    const navigate = useNavigate()

    const onChangeInput = (e) => {
        setTerm(e.target.value)
        dispatch(searchUser(term))
    }

    return (
        <Box className='app-form'>
            <Button variant='outlined' size='large' onClick={() => navigate('/add-user')}>
                Add
            </Button>
            <TextField
                label='Search'
                variant='standard'
                value={term}
                onChange={onChangeInput}/>
        </Box>
    )
}

export default AppForm