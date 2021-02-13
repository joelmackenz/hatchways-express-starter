import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputForm: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    validate() {
        let inputForm = this.state.inputForm;
        let valid = true;
        let errors = {};

        if (typeof inputForm["password"] !== "undefined") {
            if (inputForm["password"].length < 6 ){
                valid = false
                errors["password"] = "Please make your password at least 6 characters long."
            }
        }

        if (typeof inputForm["password"] !== "undefined" && typeof inputForm["confirm_password"] !== "undefined") {
            if (inputForm["password"] !== inputForm["confirm_password"]) {
                valid = false
                errors["confirm_password"] = "Passwords don't match.";
            }
        }
        if (typeof inputForm["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(inputForm["email"])) {
                valid = false;
                errors["email"] = "Please enter valid email address.";
            }

        }

        this.setState({
        errors: errors,
      });

        return valid
    }

    handleChange(event) {
        let inputForm = this.state.inputForm;
        inputForm[event.target.name] = event.target.value;
        this.setState({
            inputForm
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validate()) {
            let inputForm = {};
            inputForm["name"] = "";
            inputForm["email"] = "";
            inputForm["password"] = "";
            inputForm["confirm_password"] = "";
            this.setState({ inputForm: inputForm });
            alert('Form is submited');
        }
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit} noValidate>
                    <Form.Group controlId="name" className="col-4 offset-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="email" className="col-4 offset-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.email}</span>
                    </Form.Group>

                    <Form.Group controlId="password" className="col-4 offset-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            Make your password 6 characters or longer.
                        </Form.Text>
                        <span className="text-danger">{this.state.errors.password}</span>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword" className="col-4 offset-4">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors.confirm_password}</span>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        )
    }
}