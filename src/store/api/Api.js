import axios from 'axios'

class ServiceApi {
    _baseUrl = 'http://23.88.43.148/'

    getResource = async () => {
        const response = await axios.get(`${this._baseUrl}users/`)

        return await response.data
    }

    addUser = async (newUser) => {
        return await axios.post(`${this._baseUrl}users/${newUser}`)
    }

    deleteUser = async (id) => {
        return await axios.delete(`${this._baseUrl}user/${id}`)
    }
}

export default ServiceApi