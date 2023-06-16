import React from 'react';
import ContactElement from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
 
// function getVisibleContacts() {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }


const ContactList = () => {
 
  const contacts = useSelector(selectContactsList)
  // const { filter } = useSelector(selectFilter);



  // const visibleContacts = getVisibleContacts();

  return (
    <>
    {/* {isLoading && <h3>Loading contacts...</h3>}
    {error && <h3>{error}</h3>} */}
    <ul>
    {
      contacts.map(contact => (
        <ContactElement contact={contact} key={contact.id}  />
      ))
      }
    </ul>
    </>
  );
};

export default ContactList;
