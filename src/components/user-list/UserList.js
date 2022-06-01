import React from 'react'
import { Grid } from '@mui/material'
import './UserList.scss'
import useUsers from '../../hooks/useUsers'
import Preloader from '../preloader/Preloader'
import UserItem from '../user-item/UserItem'

const UserList = () => {
    const { users, loading } = useUsers()

    return (
        <Grid container spacing={2} sx={{ padding: '0 30px' }}>
            { loading ? <Preloader /> :
                 users.map(user => <UserItem user={user} key={user._id} />) }
        </Grid>
    )
}

export default UserList