import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Paper, Box, Avatar, Button } from '@mui/material'
import { deleteUser } from '../../store/actions'

const UserItem = ({ user }) => {
    const dispatch = useDispatch()

    const stylePaper = {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '.4s ease',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    }

    return (
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: '50px',  }}>
            <Paper sx={stylePaper}>
                <Avatar src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        sx={{ width: '100px', height: '100px' }}
                        alt='avatar' />
                <Box component='div' sx={{ marginTop: '5px', fontWeight: 'bold' }}>{user.name}</Box>
                <Box component='div' sx={{ marginTop: '5px', fontWeight: 'bold' }}>{user.surname}</Box>
                <Button onClick={() => dispatch(deleteUser(user._id))}
                        sx={{ alignSelf: 'flex-end' }} variant='outlined' size='small' color='error'>
                    Delete
                </Button>
            </Paper>
        </Grid>
    )
}

export default UserItem