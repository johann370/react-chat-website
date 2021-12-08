import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';

const LoginPage = ({ url, loggedIn, setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        fetch(`${url}/login`, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("access_token", data["access_token"])
                sessionStorage.setItem("user_id", data["user_id"]);
                localStorage.setItem('loggedIn', true)
                setLoggedIn(true);
            })

    }

    const navitems = [
        {
            link: '/login',
            text: 'Log in'
        },
        {
            link: '/signup',
            text: 'Sign up'
        }
    ]
    const form_inputs = [
        {
            label: 'Email:',
            input_type: 'text',
            placeholder: 'Email',
            onChange: setEmail,
            value: email
        },
        {
            label: 'Password:',
            input_type: 'password',
            placeholder: 'Password',
            onChange: setPassword,
            value: password
        }
    ]
    return (
        <div>
            {loggedIn && (<Navigate to='/chat' replace={true} />)}
            <Navbar navitems={navitems} />
            <Form onSubmit={login} form_inputs={form_inputs} submit_value='Log In' header='Log In' />
        </div>
    )
}

export default LoginPage
