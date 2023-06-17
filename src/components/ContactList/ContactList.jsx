import React from 'react';
import ContactElement from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';


const ContactList = () => {
 
  const visibleContacts = useSelector(selectVisibleContacts)
  
  return (
    <ul>
    {
      visibleContacts.map(contact => (
        <ContactElement contact={contact} key={contact.id}  />
      ))
      }
    </ul>
  );
};

export default ContactList;
