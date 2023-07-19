import { useState } from 'react';
import Title from './components/title';
import './index.css';
import ContactList from './containers/contact-list';
import AddContactForm from './containers/add-contact-form';

function App() {
  const [contacts, setContacts] = useState([""]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const createName = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  }

  const createNumber = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    const person = {
      name: name,
      number: number,
      estado: true,
      id: contacts.length + 1
    }
    setContacts(contacts.concat(person))
  }

  const deletePerson = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id)
    setContacts(updatedContacts)
  }

  const changeState = (id) => {
    setContacts(prevContacts => prevContacts.map(contact => {
      if (contact.id === id){
        return {...contact, estado: !contact.estado}
      }
      return contact
    }))
  }

  return (
    <div className="App">
    <Title name={"Añadir"}></Title>
      <AddContactForm onSubmit={addPerson} valueName={name} onChangeName={createName} 
      valueNumber={number} onChangeNumber={createNumber}></AddContactForm>
      <Title name={"Contactos"}></Title>
      <ContactList array={contacts} onClick={changeState} onDelete={deletePerson}></ContactList>
    </div>
  );
}

export default App;
