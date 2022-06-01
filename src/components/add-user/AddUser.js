import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Typography, Button, TextField } from '@mui/material'
import { addUser } from '../../store/actions'
import './AddUser.scss'

const AddUser = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const newUser = (term) => {
        return {
            desc: 'I am new User',
            name: term,
            _id: new Date().toString(),
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!user && user.length < 3) {
            alert('Додайте користувача')
        } else {
            dispatch(addUser(newUser(user)))
        }

    }

    return (
        <Box component='form' className='add-user' onSubmit={handleSubmit}>
            <Button variant='outlined' id='btn-back' size='medium' onClick={() => navigate('/')}>
                Back to users
            </Button>

            <Box className='add-user-wrapper'>
                <Box component='header'>
                    <Typography color='primary' component='h3'>Add User</Typography>
                </Box>
                <Box className='body' sx={{ marginTop: '20px' }}>
                    <TextField value={user}
                               onChange={e => setUser(e.target.value)}
                               id='standard-basic'
                               label='Name'
                               variant='standard'
                               fullWidth={100} />
                </Box>
                <Button onClick={handleSubmit} type='submit' sx={{ marginTop: '20px' }}
                        variant='outlined' size='large' color='primary'>
                    Add user
                </Button>
            </Box>
        </Box>
    )
}

export default AddUser