import React, { Component } from 'react'

export default class InputPasswordComponent extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" placeholder="Please Enter Password" /> 
                <p className = "notify warning">Password is not correct!!!</p> 
            </div>
        )
    }
}
