import { useDispatch, useSelector } from 'react-redux';
import { Form, FormInput, FormButton } from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { selectContactsList } from 'redux/selectors';


const ContactForm = () => {
  const contacts = useSelector(selectContactsList);

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
 
    if(contacts.find(contact => contact.name === form.elements.name.value)){
      window.alert(`${form.elements.name.value} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        phone: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <label>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </>
  );
};

export default ContactForm;
