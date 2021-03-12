import React, { Component } from 'react';
import InputFieldComponent from './../InputField';
import RadioFieldComponent from './../RadioField';

export default class InputUpdatePasswordComponent extends Component {
    render() {
        return (
            <div className="update-password-group">
                <div className="form-group">
                    <div className="input-label"><label>Mật khẩu cũ</label> </div>
                    <InputFieldComponent placeholder="Nhập mật khẩu cũ"/>
                </div>
                
                <div className="form-group">
                    <div className="input-label"><label>Mật khẩu mới</label></div>
                    <div className="input-group">
                        <input type="text" placeholder="Nhập mật khẩu mới" /> 
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-label"><label>Nhập lại</label></div>
                    <div className="input-group">
                        <input type="text" placeholder="Nhập lại mật khẩu mới" /> 
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-label gender-label">Nhận mã xác nhận</div>
                    <div className="input-group">
                        <RadioFieldComponent 
                            id = "email"
                            name ="type-confirm"
                            label = "Email"
                            isChecked = {false}
                            onHandleChange = {this.onHandleChange}
                        />
                        <RadioFieldComponent 
                            id = "phone"
                            name ="type-confirm"
                            label = "Số điện thoại"
                            isChecked = {true}
                            onHandleChange = {this.onHandleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
