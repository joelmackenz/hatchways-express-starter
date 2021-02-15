import { React, useState } from 'react';
import { Tab, Nav} from 'react-bootstrap';
import Chats from "./Chats";
import Contacts from "./Contacts";
import useLocalStorage from '../custom hooks/useLocalStorage'

export default function Sidebar( userName ) {
    const [ activeKey, setActiveKey ] = useState("chats")
    const [ name, setName ] = useLocalStorage('name')
    return(
        <div style={{width:"300px"}} className="d-flex flex-column">
            <div className="p-2 small">
                {name}
            </div>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link eventKey="chats">Chats</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="border-right overflow-auto flex-grow-1">
                        <Tab.Pane eventKey={"chats"}>
                            <Chats />
                        </Tab.Pane>
                        <Tab.Pane eventKey={"contacts"}>
                            <Contacts />
                        </Tab.Pane>
                    </Tab.Content>
            </Tab.Container>
        </div>
        )
}

