import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const LoginPage = () => {
    const navitems = [
        {
            link: "/login",
            text: "Log in"
        },
        {
            link: "/signup",
            text: "Sign up"
        }
    ]
    const form_inputs = [
        {
            label: "Email:",
            input_type: "text",
            placeholder: "Email"
        },
        {
            label: "Password:",
            input_type: "password",
            placeholder: "Password"
        }
    ]
    return (
        <div>
            <Navbar navitems={navitems} />
            <Form form_inputs={form_inputs} submit_value="Log In" header="Log In" />
        </div>
    )
}

export default LoginPage
