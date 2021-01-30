import React, { Component } from 'react'

export default class InputPhoneNumberComponent extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="input-label">Số điện thoại</div>
                <div className="input-group">
                <input type="text" className="pattern" defaultValue="0123 456 789" />
                <button>Gởi mã xác thực</button> 
                </div>
            </div>
        )
    }
}
