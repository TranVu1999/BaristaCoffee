import React, { Component } from 'react'

export default class InputFieldComponent extends Component {

    render() {
        let {value, placeholder} = this.props;
        return (
            <div className="input-group">
                <input 
                    type="text" 
                    defaultValue= {value}
                    placeholder = {placeholder} 

                /> 
            </div>
        )
    }
}
