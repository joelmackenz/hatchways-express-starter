import React, { useContext } from 'react';
import useLocalStorage from '../custom hooks/useLocalStorage';

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}


export function ContactProvider({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function createContact(name) {
        setContacts(prevContacts => {
            return [...prevContacts, { name }]
        })
    }

    return(
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}