import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
// import UseChats from "./contexts/UseChats"

export default function OpenChat() {
    const [text, setText] = useState('')
    //const  sendMessage  = useChats();
    function handleSubmit(e) {
        e.preventDefault();
        // sendMessage()
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>
            <Form noValidate onSubmit={handleSubmit} >
                <Form.Group className="m-2">
                    <InputGroup>
                        <Form.Control as="textarea" required value={text} onChange={e => setText(e.target.value)} style={{ height: '75px', resize: 'none' }}>

                        </Form.Control>
                        <InputGroup.Append>
                            <Button type="submit">Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>

            </Form>
        </div>
    )
}

