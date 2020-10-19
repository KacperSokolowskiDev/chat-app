import React, {Component} from 'react';
import './Contact.css';
import ContactList from './ContactList';


//React Challenge State 

class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOnline: false,
        }
    }
    render() {
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.avatar}></img>
                <div>
                    <p className="name">{this.props.name}</p>
                    <div className="status" onClick={event => {
                            const newStatus = !this.state.isOnline;
                            this.setState({isOnline: newStatus});}}>
                            <div className={this.state.isOnline ? 'status-online' : 'status-offline'}></div>
                            <p className="status-text">{this.state.isOnline ? 'Online' : 'Offline'}</p>

                    </div>
                </div>
            </div>
        );
    }
    
}



//React Challenge 2

// class Contact extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             online: false,
//         }
//     }
//     render() {
//         return(
//             <div className="Contact">
//                 <img className="avatar" src={props.avatar}></img>
//                 <div>
//                     <p className="name">{props.name}</p>
//                     <div className="status">
//                         <div className={props.online ? 'status-online' : 'status-offline'}></div>
//                         <p className="status-text">{props.online ? 'online' : 'offline'}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
    
// }

export default Contact;


//https://randomuser.me/api/portraits/men/96.jpg