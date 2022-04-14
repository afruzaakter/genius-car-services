import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const navigateRegister = event =>{
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto   mt-5'>

           
            <h1 className='text-center mt-5 p-5'> Login</h1>
           <div className='login-part '>
           <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p><span>New genius account? <Link to="/register" onClick={navigateRegister} className="pe-auto text-danger text-decoration-none">Please Register</Link></span></p>
            </Form>
           </div>


        </div>
    );
};

export default Login;