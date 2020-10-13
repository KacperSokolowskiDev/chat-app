import React from 'react';
import './Contact.css';

function Contact() {
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/96.jpg"></img>
            <div>
                <p className="name">Terry Jones</p>
                <div className="status">
                    <div className="status-online"></div>
                        <p className="status-text">Online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;