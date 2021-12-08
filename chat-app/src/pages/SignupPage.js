import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const SignupPage = ({ url, loggedIn, setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPass, setReenterPass] = useState('');

    const signup = async (e) => {
        e.preventDefault();

        const body =
        {
            'username': username,
            'email': email,
            'password': password
        };

        if (password === reenterPass) {
            const response = await fetch(`${url}/users`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();

            setUsername('');
            setEmail('');
            setPassword('');
            setReenterPass('');
        }
    }

    const form_inputs = [
        {
            label: 'Username:',
            input_type: 'text',
            placeholder: 'Username',
            onChange: setUsername
        },
        {
            label: 'Email:',
            input_type: 'text',
            placeholder: 'Email',
            onChange: setEmail
        },
        {
            label: 'Password:',
            input_type: 'password',
            placeholder: 'Password',
            onChange: setPassword
        },
        {
            label: 'Re-enter Password:',
            input_type: 'password',
            placeholder: 'Re-enter Password',
            onChange: setReenterPass
        }
    ]
    return (
        <div>
            <Navbar loggedIn={loggedIn} />
            <Form onSubmit={signup} form_inputs={form_inputs} submit_value='Sign up' header='Sign Up' />
        </div>
    )
}

export default SignupPage
