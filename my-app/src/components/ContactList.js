import React from 'react';
import Contact from './Contact';

const members = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: true
      },
      {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
      },
      {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
      },
      {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
      },
      {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
      }

      
];

const ContactList = () => {
    return(
        members.map(member => (
            <Contact
            name={member.name}
            avatar={member.avatar}
            online={member.online}/>
        ))
    )
}

export default ContactList