import React, { useContext } from 'react';
import useLocalStorage from '../custom hooks/useLocalStorage';
import { useContacts } from './ContactProvider'

const ChatsContext = React.createContext()

export function useChats() {
    return useContext(ChatsContext)
}


export function ChatsProvider({ children }) {
    const [chats, setChats] = useLocalStorage('chats', [])

    const { contacts } = useContacts();

    function createChats(recipients) {
        setChats(prevChats => {
            return [...prevChats, { recipients, messages: [] }]
        })
    }

    // Formatting for chats
const formattedChats = chats.map(chat => {
    const recipients = chat.recipients.map(recipient => {
        const contact = contacts.find(contact => {
            return contact.id === recipient
        })
        const name = (contact && contact.name) || recipient
        return { id: recipient, name }
    })

    return { ...chat, recipients }
})

const value = {
    chats: formattedChats,
    createChats
}

return(
        <ChatsContext.Provider value={{ value }}>
            {children}
        </ChatsContext.Provider>
    )
}