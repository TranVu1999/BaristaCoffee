import React, { Component } from 'react';
import './style.scss';

import InputFieldComponent from './../../../commons/components/InputField';
import InputPhoneNumberComponent from './../../../commons/components/InputPhoneNumber';
import RadioFieldComponent from './../../../commons/components/RadioField';
import SelectFieldComponent from './../../../commons/components/SelectField';
import CheckboxFieldComponent from './../../../commons/components/CheckboxField';
import InputUpdatePasswordComponent from './../../../commons/components/InputUpdatePassword';

import {connect} from 'react-redux';

class AccountInfomation extends Component {
    constructor(props){
        super(props);
        this.state = {
            isUpdatePassword: false,
            fullname: ""
        }
    }
    onHandleChange = (event) =>{
        let {name, value} = event.target;
        console.log("account info", name, value);
    }

    handleOpenUpdatePasswordForm = () =>{
        this.setState({
            ...this.state,
            isUpdatePassword: !this.state.isUpdatePassword
        });
    }

    renderUpdatePasswordForm = () =>{
        const {isUpdatePassword} = this.state;
        return isUpdatePassword ? (<InputUpdatePasswordComponent/>) : null;
    }

    render() {
        const {isUpdatePassword} = this.state;
        const {accountInfo} = this.props;
        console.log("accountInfo", accountInfo)

        return (
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form 
                        className="account__info"
                        // onSubmit = {this.onHandleUpdate}
                    >

                        <div className="form-group">
                            <div className="input-label">Họ tên</div>
                            <InputFieldComponent 
                                value = {null}
                                placeholder ="Nhập tên"
                                onHandleChange = {this.onHandleChange}
                                name = 'fullname'
                            />
                        </div>

                        <InputPhoneNumberComponent 
                            value = {null} 
                        />
                        
                        <div className="form-group">
                            <div className="input-label">Email </div>
                            <InputFieldComponent 
                                value = {null} 
                                placeholder ="Nhập email"
                                onHandleChange = {this.onHandleChange}
                                name = 'email'
                            />
                        </div>

                        <div className="form-group">
                            <div className="input-label gender-label">Giới tính</div>
                            <div className="input-group">
                                <RadioFieldComponent 
                                    id = "male"
                                    name ="gender"
                                    label = "Nam"
                                    isChecked = {false}
                                    onHandleChange = {this.onHandleChange}
                                />
                                <RadioFieldComponent 
                                    id = "female"
                                    name ="gender"
                                    label = "Nữ"
                                    isChecked = {true}
                                    onHandleChange = {this.onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-group--date">
                            <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                            <div className="select-group">
                                <SelectFieldComponent 
                                    name = "date"
                                    year = {1990}
                                    month = {1}
                                    value = {1}
                                    onSelectChange={this.onHandleChange}
                                />
                                <SelectFieldComponent 
                                    name = "month"
                                    value = {1}
                                    onSelectChange={this.onHandleChange}
                                    
                                />
                                <SelectFieldComponent 
                                    name = "year"
                                    value = {1990}
                                    onSelectChange={this.onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-label"></div>
                            <div className="input-group">
                                <CheckboxFieldComponent
                                    onOpenUpdatePassword = {this.handleOpenUpdatePasswordForm}
                                    value = {isUpdatePassword}
                                    id = "update-password"
                                />
                            </div>
                        </div>

                        {this.renderUpdatePasswordForm()}

                        <div className="form-group">
                            <div className="input-label" />
                            <button 
                                // disabled = {true}
                            >Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        accountInfo : state.accountInfoReducer.accountInfo
    }
}

export default connect(mapStateToProps)(AccountInfomation)
