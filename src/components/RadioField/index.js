import React, { Component } from 'react'

export default class RadioFieldComponent extends Component {

    onHandleChange = () =>{

    }
    render() {
        const {isChecked, name, label} = this.props;
        return (
            <div className="radio-group">
                <input 
                    type="radio" 
                    name= {name}
                    checked = {isChecked}
                    onChange = {this.onHandleChange}
                />
                <label>
                <div className="label-radio" />
                    {label}
                </label>
            </div>
        )
    }
}
