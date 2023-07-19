import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onSubmit}> {props.name} </button>
    );
}

export default Button;
