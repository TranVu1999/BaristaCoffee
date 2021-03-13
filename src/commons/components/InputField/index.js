import React, { Component } from 'react'
import './style.scss';

export default class InputFieldComponent extends Component {

    onHandleChange = (event) =>{
        this.props.onHandleChange(event);
    }

    render() {
        let {value, placeholder, name} = this.props;
        return (
            <div className="input-group relative-notify">
                <input 
                    type="text" 
                    defaultValue= {value}
                    placeholder = {placeholder} 
                    onChange = {this.onHandleChange}
                    name = {name}
                /> 

                <div className = "notify-box">
                    <span aria-hidden="true" class="icon_error-circle notify-icon"></span>
                    <p className = "notify warning notify-content">warning</p>
                </div>
            </div>
        )
    }
}
