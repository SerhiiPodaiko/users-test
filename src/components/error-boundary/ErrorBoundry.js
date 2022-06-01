import React, { Component } from 'react'
import { Box } from '@mui/material'
import notFound from '../../assets/images/not-found.jpg'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    styleImage = {
        maxWidth: 600,

    }

    render() {
        if (this.state.hasError) {
            return (
                <Box sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box component='h1' sx={{ position: 'absolute', top: 100, color: '#F4644B' }}>
                        Ooops.. Something went wrong...
                    </Box>
                    <img style={this.styleImage} src={notFound} alt='not-found'/>
                </Box>
            )
        }

        return this.props.children
    }
}