import { React, useState } from 'react';
import { Button, Tab, Nav, Modal } from 'react-bootstrap';
import Chats from "./Chats";
import Contacts from "./Contacts";
import NewChat from './NewChat';
import NewContact from './NewContact';

export default function Sidebar(userName) {
    const [ activeKey, setActiveKey ] = useState("chats")

    return(
        <div style={{width:"300px"}} className="d-flex flex-column">
            <div className="p-2 small">
                userName
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
                {/* Below can be added for adding new contact functionality */}
                {/* <Button>
                    New {activeKey === "chats" ? "Chat" : "Contact"}
                </Button> */}
            </Tab.Container>
        </div>
        )
}

