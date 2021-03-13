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
            fullname: '',
            phoneNumber: '',
            email: '',
            gender: 'male',
            password: '',
            confirmPassword: '',
            birthday:{
                date: 1,
                month: 1,
                year: 1990
            }
        }
    }
    onHandleChange = (event) =>{
        let {name, value, id} = event.target;
        console.log("name", value)

        let data = {...this.state, [name]: value}
        if(name === 'gender'){
            data = {...this.state, gender: id}
        }else if(name === "date" || name === "month" || name === 'year'){
            data = {...data, birthday: {...data.birthday, [name]: value}}
        }

        
        this.setState({
            ...data
        })

        
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
        const accountInfo = this.state;

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
                                value = {accountInfo.fullname}
                                placeholder ="Nhập tên"
                                onHandleChange = {this.onHandleChange}
                                name = 'fullname'
                            />
                            
                        </div>

                        <div className="form-group">
                            <div className="input-label">Số điện thoại</div>
                            <InputFieldComponent 
                                value = {accountInfo.phoneNumber} 
                                placeholder ="Nhập số điện thoại"
                                onHandleChange = {this.onHandleChange}
                                name = 'phoneNumber'
                            />
                        </div>
                        
                        <div className="form-group">
                            <div className="input-label">Email </div>
                            <InputFieldComponent 
                                value = {accountInfo.email} 
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
                                    isChecked = {accountInfo.gender === "male"}
                                    onHandleChange = {this.onHandleChange}
                                />
                                <RadioFieldComponent 
                                    id = "female"
                                    name ="gender"
                                    label = "Nữ"
                                    isChecked = {accountInfo.gender === "female"}
                                    onHandleChange = {this.onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-group--date">
                            <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                            <div className="select-group">
                                <SelectFieldComponent 
                                    name = "date"
                                    year = {accountInfo.birthday.year}
                                    month = {accountInfo.birthday.month}
                                    value = {accountInfo.birthday.date}
                                    onSelectChange={this.onHandleChange}
                                />
                                <SelectFieldComponent 
                                    name = "month"
                                    value = {accountInfo.birthday.month}
                                    onSelectChange={this.onHandleChange}
                                    
                                />
                                <SelectFieldComponent 
                                    name = "year"
                                    value = {accountInfo.birthday.year}
                                    onSelectChange={this.onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-label"></div>
                            <div className="input-group">
                                <CheckboxFieldComponent
                                    onOpenUpdatePassword = {this.handleOpenUpdatePasswordForm}
                                    value = {accountInfo.isUpdatePassword}
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

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.accountInfo.fullname && (nextProps.accountInfo.fullname !== prevState.fullname)){
            const {accountInfo} = nextProps;
            
            return { 
                ...prevState,
                fullname: accountInfo.fullname,
                phoneNumber: accountInfo.phoneNumber,
                email: accountInfo.email,
                gender: accountInfo.gender,
                birthday:{
                    date: accountInfo.birthday.date,
                    month: accountInfo.birthday.month,
                    year: accountInfo.birthday.year
                }
            };
        }

        return null;
      }
}

const mapStateToProps = state =>{
    return {
        accountInfo : state.accountInfoReducer.accountInfo
    }
}

export default connect(mapStateToProps)(AccountInfomation)
