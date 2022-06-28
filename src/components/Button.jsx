import React from 'react';
import './Button.css';

export default function button(props) {
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.triple ? 'triple' : ''

    return (
        <button className={classes} onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    );
}