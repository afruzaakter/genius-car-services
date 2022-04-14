import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto p-5 mt-5'>
            
            <h2 className='mt-5 text-primary text-center'>Please Register</h2>
            <div className='login-part '>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={passwordRef} type="email"  required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
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

export default Register;