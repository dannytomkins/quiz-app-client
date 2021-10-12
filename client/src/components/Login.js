import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
            <h2>
                Sign In
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
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Login' />
            </form>
            <p>
                Don't have an account? <Link to='/login'>Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
