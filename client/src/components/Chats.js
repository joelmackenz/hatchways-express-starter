import React from 'react';
import { ListGroup } from 'react-bootstrap';


export default function Chats() {

    return (
        <ListGroup variant="flush">
            <ListGroup.Item action>Joel</ListGroup.Item>
            <ListGroup.Item action>Steven</ListGroup.Item>
            <ListGroup.Item action>Sandra</ListGroup.Item>
            <ListGroup.Item action>Stacey</ListGroup.Item>
        </ListGroup>
    )
}

