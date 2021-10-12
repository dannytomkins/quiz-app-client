import axios from 'axios'

// Login User
export const loginUser =
    (username, password) =>
    async => {
        const config = {
            headers: { 'Content-Type': 'application/json', }
        }
        const body = JSON.stringify({ username, password });

        // Do we need to hit login at the back end?
        axios.post('/api/login', body, config)
    }

// Register User
export const registerUser = 
    ({ username, firstName, lastName, password }) =>
    async => {
        const config = {
            headers: { 'Content-Type': 'application/json', }
        }
        const body = JSON.stringify({ username, firstName, lastName, password })

        axios.post('/api/user', body, config)
    }
