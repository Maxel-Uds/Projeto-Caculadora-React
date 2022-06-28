import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props);

        this.clearDisplay = this.clearDisplay.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);       
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} clearDisplay={this.clearDisplay}/>
                <Button label="AC" triple click={this.clearDisplay}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" click={this.addDigit}/>
                <Button label="" buttonLogo/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }

    clearDisplay() {
        this.setState({ ...initialState });
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(digit) {
        if(!(digit === '.' && this.state.displayValue.includes('.'))) {
            const clear = this.state.displayValue === '0' || this.state.clearDisplay;
            const currentValue = clear ? '' : this.state.displayValue;
            const display = currentValue + digit;
            this.setState({ displayValue: display, clearDisplay: false });

            if(digit !== '.') {
                const index = this.state.current;
                const newValue = parseFloat(display);
                const values = [...this.state.values];
                values[index] = newValue;
                this.setState({ values });
            }
        }
    }
}