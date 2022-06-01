import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import AddUser from './add-user/AddUser'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-user' element={<AddUser />} />
        </Routes>
    )
}

export default App