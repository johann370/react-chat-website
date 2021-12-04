import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const SignupPage = () => {
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
            label: "Username:",
            input_type: "text",
            placeholder: "Username"
        },
        {
            label: "Email:",
            input_type: "text",
            placeholder: "Email"
        },
        {
            label: "Password:",
            input_type: "password",
            placeholder: "Password"
        },
        {
            label: "Re-enter Password:",
            input_type: "password",
            placeholder: "Re-enter Password"
        }
    ]
    return (
        <div>
            <Navbar navitems={navitems} />
            <Form form_inputs={form_inputs} submit_value="Sign up" header="Sign Up" />
        </div>
    )
}

export default SignupPage
