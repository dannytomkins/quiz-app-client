import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {

    // create state with default values
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    // destructure
    const { username, password } = formData

    // onChange event to change target
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    // onSubmit function to pass formData to axios function
    const onSubmit = async e => {
        e.preventDefault();
        // Call login action here
        // login(username, password)
        console.log('Login Success!', formData)
    }
    return (
        <div>
            <h1>
                Sign In
            </h1>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <TextField 
                    className = 'form-group'
                    label='Username'
                    sx = {{ m:1, width: '50%'}}
                    type='text'
                    placeholder='username'
                    name='username'
                    value={username}
                    onChange={(e) => onChange(e)}
                    />

                <TextField 
                    className = 'form-group'
                    label='Password'
                    sx = {{ m:1, width: '50%'}}
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    />

                <Button 
                    sx = {{ m:1, width: '50%'}}
                    type='submit' 
                    className='btn btn-primary' 
                    value='Login'>
                    Login
                </Button>
            </form>
            <p>
                Don't have an account? <Link to='/login'>Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
