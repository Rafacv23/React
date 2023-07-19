import React from 'react';
import {ContactId} from "../components/contacto.jsx"
import { Contact } from '../models/contact-class.js';

export const ContactList = () => {

  const defaultContact = new Contact("Rafa", "Canosa", "Rafacv23@gmail.com", true)
  const defaultContact2 = new Contact("Rafa", "Canosa", "Rafacv23@gmail.com", true)

  const contactos = [defaultContact, defaultContact2]

  return (
    <div>
      <div>
        <h1>Contactos</h1>
      </div>
      {contactos.map((contacto) => (
        <ContactId key={contacto.email} Contact={contacto}></ContactId>
      ))}    
      </div>
  );
};
