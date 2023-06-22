import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from "../models/contact-class.js"


export const ContactId = ({Contact}) => {
    return (
        <div>
            <h2>
                Nombre: {Contact.nombre} {Contact.apellido}
            </h2>
            <h3>
                Email: {Contact.email}
            </h3>
            <h3>
                {Contact.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
            </h3>
        </div>
    );
};


ContactId.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

