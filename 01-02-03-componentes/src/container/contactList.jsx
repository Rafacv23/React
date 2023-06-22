import React from 'react';
import {ContactId} from "../components/contacto.jsx"
import { Contact } from '../models/contact-class.js';

export const ContactList = () => {

  const defaultContact = new Contact("Rafa", "Canosa", "Rafacv23@gmail.com", true)

  return (
    <div>
      <div>
        <h1>Contactos</h1>
      </div>
        <ContactId Contact = {defaultContact}></ContactId>
    </div>
  );
};
