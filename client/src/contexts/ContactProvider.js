import React, { useContext } from 'react';
import useLocalStorage from '../hooks/userLocalStorage';

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}


export function ContactProvider({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function createContact(name) {
        setContacts(preContacts => {
            return [...prevContacts, { name }]
        })
    }

    return(
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}