import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Login extends React.Component {
    render() {
        return (
        <div className="container">
                <Form>

                    <Form.Group controlId="formEmail" className="col-4 offset-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="col-4 offset-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                            Make your password 6 characters or longer.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        )
    }
}