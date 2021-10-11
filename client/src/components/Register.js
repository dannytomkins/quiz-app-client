import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
            console.log('Register Success!', formData)
        }
    }
    return (
        <div>
            <h2>
                Sign Up
            </h2>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                    type='text'
                    placeholder='username'
                    name='username'
                    value={username}
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type='text'
                    placeholder='first name'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type='text'
                    placeholder='last name'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type='password'
                    placeholder='confirm password'
                    name='password2'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>
            <p>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    )
}

export default Register