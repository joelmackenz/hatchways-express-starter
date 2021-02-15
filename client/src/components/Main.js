import React from 'react';
import Sidebar from './sidebar';
import OpenChat from './OpenChat'

export default function Main({ name }){
    return(
        <div className="d-flex" style={{height:'80vh'}}>
            <Sidebar name={name}/>
            <OpenChat />
        </div>

    )
}