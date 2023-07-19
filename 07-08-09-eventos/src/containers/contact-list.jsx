import React from 'react';
import Button from '../components/button';

const ContactList = ({array, onDelete, onClick}) => {
    return (
        <div>
            {array.map(arrayObject => (
                <div key={arrayObject.id}>
                    {arrayObject.name} {arrayObject.number} {arrayObject.estado ? "Conectado" : "Desconectado"}
                    <Button onSubmit={() => onClick(arrayObject.id)} name={"Cambiar Estado"}></Button>
                    <Button onSubmit={() => onDelete(arrayObject.id)} name={"Delete"}></Button>
                </div>
            ))}
        </div>
    );
}

export default ContactList;
