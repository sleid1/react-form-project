import React from 'react';
import { useState } from 'react';
import FormInput from '../components/FormInput';
import './LoginForm.css';
import '../components/formInput.css';
import { Link } from 'react-router-dom';
import CustomBtn from './CustomBtn';

const RegisterForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'User with this email does not exist',
            label: 'Email',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage:
                'Incorrect password. Please make sure that the password is correct',
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>SUBMIT</button>
                <p>
                    Don't have an account ? <Link to="/register">Register</Link>
                </p>
            </form>
            <CustomBtn text="Return to Home page" />
        </div>
    );
};

export default RegisterForm;
