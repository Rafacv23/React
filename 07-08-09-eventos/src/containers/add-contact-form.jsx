import React from 'react';
import Input from '../components/input';
import Button from '../components/button';

const AddContactForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input value={props.valueName} onChange={props.onChangeName} placeholder={"Nombre"}></Input>
            <Input value={props.valueNumber} onChange={props.onChangeNumber} placeholder={"Número"}></Input>
            <Button type={"submit"} name={"Add"}></Button>
        </form>
    );
}

export default AddContactForm;
