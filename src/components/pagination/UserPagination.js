import React from 'react'
import { Box, Pagination } from '@mui/material'

const UserPagination = () => {
    return (
        <Box sx={{ width: '100%', position: 'absolute', bottom: '30px', display: 'flex', justifyContent: 'center' }}>
            <Pagination count={10} color='primary' />
        </Box>
    )
}

export default UserPagination