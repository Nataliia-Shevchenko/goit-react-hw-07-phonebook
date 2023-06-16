import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Contact, DelButton } from './ContactElement.styled';
import { deleteContact } from 'redux/operations';


const ContactElement = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));


  return (
    <Contact>
      {name}: {phone}
      <DelButton type="button" onClick={handleDelete} >
        Delete
      </DelButton>
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
