import React from 'react';
import './Contact.css';

function Contact(props) {
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar}></img>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{props.online ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;


//https://randomuser.me/api/portraits/men/96.jpg