import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/user';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const notify = () => toast("Testoast");

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
    // const onSubmit = async e => {
    //     e.preventDefault();
    //     // Call login action here
    //     loginUser( username, password )
    //     .then(function (res) {
    //         Cookies.set("firstName", res.data.first_name);
    //         Cookies.set("lastName", res.data.last_name);
    //         Cookies.set("id", res.data.id)
    //     })
    //     .catch(err => console.log(err))
    //     console.log('Login Success!', formData)

        
    // }
    return (
        <div>
            <ToastContainer />
            <h1>
                Sign In
            </h1>
            <form className='form' 
            // onSubmit={(e) => onSubmit(e)}
            >
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
                    onClick={notify}
                    sx = {{ m:1, width: '50%'}}
                    type='submit' 
                    className='btn btn-primary' 
                    value='Login'>
                    Login
                </Button>

            </form>
            <p>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
