import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import user from "../../actions/user";

const Register = () => {

    // create state with default values
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        password2: ''
    })

    // destructure
    const { username, firstName, lastName, password, password2 } = formData

    // onChange event to change target
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    // onSubmit function to pass formData to axios function
    const onSubmit = async (e) => {
        e.preventDefault()
        if (password !== password2) {
            // Add alert here
            console.log('Passwords do not match')
        } else {
            // Call Register action here
            user.registerUser({ username, firstName, lastName, password })
            console.log('Register Success!', formData);


            // Is this a redundant call?
            await axios.post('http://localhost:2121/user')
            
            
        }
    }
    return (
        <div>
            <h1>
                Sign Up
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
                    className='form-group'
                    label='First  Name'
                    sx = {{ m:1, width: '50%'}}
                    type='text'
                    placeholder='first name'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => onChange(e)}
                    />
                <TextField 
                    className='form-group'
                    label='Last Name'
                    sx = {{ m:1, width: '50%'}}
                    type='text'
                    placeholder='last name'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => onChange(e)}
                    />

                    <TextField 
                    className='form-group'
                    label='Password'
                    sx = {{ m:1, width: '50%'}}
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    />

                    <TextField 
                    className='form-group'
                    label='Confirm Password'
                    sx = {{ m:1, width: '50%'}}
                    type='password'
                    placeholder='confirm password'
                    name='password2'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    />

                <Button 
                    sx = {{ m:1, width: '50%'}}
                    type='submit' 
                    className='btn btn-primary' 
                    value='Register'
                    >
                        Submit
                    </Button>
            </form>
            <p>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    )
}

export default Register;