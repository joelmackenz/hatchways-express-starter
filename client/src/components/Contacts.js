import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider'

export default function Contacts() {
    const { contacts } = useContacts()
    const [ selectedContact, setSelectedContact ] = useState()

    return (
        <ListGroup variant="flush">
            <ListGroup.Item action variant="primary">Joel</ListGroup.Item>
            <ListGroup.Item action variant="primary">Steven</ListGroup.Item>
            <ListGroup.Item action variant="primary">Sandra</ListGroup.Item>
            <ListGroup.Item action variant="primary">Stacey</ListGroup.Item>
        </ListGroup>
    )
}

