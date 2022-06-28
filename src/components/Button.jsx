import React from 'react';
import './Button.css';

export default function button(props) {
    return <button className="button">{props.label}</button>
}