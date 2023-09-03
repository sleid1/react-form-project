import React from 'react';
import { useState } from 'react';
import FormInput from '../components/FormInput';
import './RegisterForm.css';
import '../components/formInput.css';
import { Link } from 'react-router-dom';
import CustomBtn from './CustomBtn';

const RegisterForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage:
                'Username should be 3-16 characters and should not include any special character',
            label: 'Username',
            pattern: '^[A-Za-z0-9]{5,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address',
            label: 'Email',
            required: true,
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            label: 'Birthday',
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage:
                'Password should be 8-20 characters and it should include at least 1 letter, 1 number and 1 special character',
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Passwords do not match',
            label: 'Confirm Password',
            pattern: values.password,
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
                <h1>Register</h1>
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
                    Already a user ? <Link to="/login">Login</Link>
                </p>
            </form>
            <CustomBtn text="Return to Home page" />
        </div>
    );
};

export default RegisterForm;