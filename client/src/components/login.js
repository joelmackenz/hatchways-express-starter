import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login({ onNameSubmit }) {

    const userNameRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        onNameSubmit(userNameRef.current.value)
    }

        return (
        <div className="container">
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formName" className="col-4 offset-4">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" ref={userNameRef} required />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="col-4 offset-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="col-4 offset-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>

                </Form>
            </div>
        )
}


