import React  from 'react'
import AppBar from '../app-bar/AppBar'
import AppForm from '../app-form/AppForm'
import UserList from '../user-list/UserList'
import UserPagination from '../pagination/UserPagination'
import { Box } from '@mui/material'

const Home = () => {
    return (
        <Box className='app'>
            <AppBar />
            <AppForm />
            <UserList />
            <UserPagination />
        </Box>
    )
}

export default Home