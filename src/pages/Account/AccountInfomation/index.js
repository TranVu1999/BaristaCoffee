import React, { Component } from 'react';
import './style.scss';

import InputFieldComponent from './../../../commons/components/InputField';
import RadioFieldComponent from './../../../commons/components/RadioField';
import SelectFieldComponent from './../../../commons/components/SelectField';
import CheckboxFieldComponent from './../../../commons/components/CheckboxField';

import * as Validate from "./../../../commons/js/validate-input";
import * as Notify from "./../../../commons/constant/Notify";

import {connect} from 'react-redux';

class AccountInfomation extends Component {
    constructor(props){
        super(props);
        this.state = {
            placeConfirm: 'email',
            isUpdatePassword: false,
            fullname: '',
            phoneNumber: '',
            email: '',
            gender: 'male',
            password: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            birthday:{
                date: 1,
                month: 1,
                year: 1990
            },
            error: {
                fullname: '',
                phoneNumber: '',
                email: '',
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            }
        }
    }

    onHandleChange = (event) =>{
        let {name, value, id} = event.target;

        let data = {
            ...this.state, 
            [name]: value,
            error: {
                ...this.state.error,
                [name]: ''
            }
        }

        if(name === 'gender'){
            data = {...this.state, gender: id}
        }else if(name === 'place-confirm'){
            data = {...this.state, placeConfirm: id}
        }else if(name === "date" || name === "month" || name === 'year'){
            data = {...data, birthday: {...data.birthday, [name]: value}}
        }

        
        this.setState({
            ...data
        })
    }

    onHandleBlur = event =>{
        const {value, name} = event.target;
        let error ={}

        switch (name){
            case 'fullname':
                if(!value){
                    error.fullname = Notify.IS_EMPTY
                }else if(!Validate.isFullname(value)){
                    error.fullname = Notify.IS_NOT_FULLNAME
                }
                break;

            case 'phoneNumber':
                if(!value){
                    error.phoneNumber = Notify.IS_EMPTY
                }else if(!Validate.isPhoneNumber(value)){
                    error.phoneNumber = Notify.IS_NOT_PHONE_NUMBER
                }
                break;

            case 'email':
                if(!value){
                    error.email = Notify.IS_EMPTY
                }else if(!Validate.isEmail(value)){
                    error.email = Notify.IS_NOT_EMAIL
                }
                break;

            case 'oldPassword':
                if(!value){
                    error.oldPassword = Notify.IS_EMPTY
                }else if(!Validate.isPassword(value)){
                    error.oldPassword = Notify.IS_NOT_PASSWORD
                }else if(value !== this.state.password){
                    error.oldPassword = 'This password is not correct!'
                }
                break;

            case 'newPassword':
                if(!value){
                    error.newPassword = Notify.IS_EMPTY
                }else if(!Validate.isPassword(value)){
                    error.newPassword = Notify.IS_NOT_PASSWORD
                }
                break;

            case 'confirmPassword':
                if(!value){
                    error.confirmPassword = Notify.IS_EMPTY
                }else if(value !== this.state.newPassword){
                    error.confirmPassword = "Your comfirm password is not match!"
                }
                break;
            default:
                error ={...this.state.error}
        }

        this.setState({
            ...this.state,
            error
        })
    }

    handleOpenUpdatePasswordForm = () =>{
        this.setState({
            ...this.state,
            isUpdatePassword: !this.state.isUpdatePassword
        });
    }

    onHandleUpdateAccountInfo = (event) =>{
        event.preventDefault();
        const accountInfo = this.state;

        // Bước 1: Kiểm tra form update mật khẩu có đang được mở hay không
        if(accountInfo.isUpdatePassword){
            // Hiện tại, form update mật khẩu đang được mở đang được mở
        }else{
            // Hiện tại, form update mật khẩu được được đóng
            // Bước 2: kiểm tra người dùng có lỡ tay đóng form hay không thông qua việc kiểm tra oldPasswrod nếu có giá trị thì xác định là có

            if(accountInfo.newPassword){
                // Trường hợp người dùng muốn update mật khẩu
            }else{
                // Trường hợp người dùng chỉ muốn update thông tin
                // Bước 3: kiểm tra xem các thông tin cần update có đang bị trống hay không
                let error = {...accountInfo.error};
                let flag = false;
                if(!accountInfo.fullname){
                    error.fullname = Notify.IS_EMPTY;
                    flag = true;
                }

                if(!accountInfo.phoneNumber){
                    error.phoneNumber = Notify.IS_EMPTY;
                    flag = true;
                }

                // Bước 4: Kiểm tra nếu xảy ra lỗi thì thông báo
                if(flag){
                    this.setState({
                        ...this.state,
                        error
                    })
                }else{
                    // Bước 5: Gởi API về server cập nhật thông tin
                    
                }

                
            }
            
        }
    }

    render() {
        const accountInfo = this.state;
        console.log("account", accountInfo)

        return (
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form 
                        className="account__info"
                        onSubmit = {this.onHandleUpdateAccountInfo}
                    >

                        <div className="form-group">
                            <div className="input-label">Họ tên</div>
                            <InputFieldComponent 
                                value = {accountInfo.fullname}
                                placeholder ="Nhập tên"
                                onHandleChange = {this.onHandleChange}
                                name = 'fullname'
                                onHandleBlur = {this.onHandleBlur}
                                error = {accountInfo.error.fullname}
                            />
                            
                        </div>

                        <div className="form-group">
                            <div className="input-label">Số điện thoại</div>
                            <InputFieldComponent 
                                value = {accountInfo.phoneNumber} 
                                placeholder ="Nhập số điện thoại"
                                onHandleChange = {this.onHandleChange}
                                name = 'phoneNumber'
                                onHandleBlur = {this.onHandleBlur}
                                error = {accountInfo.error.phoneNumber}
                            />
                        </div>
                        
                        <div className="form-group">
                            <div className="input-label">Email </div>
                            <InputFieldComponent 
                                value = {accountInfo.email} 
                                placeholder ="Nhập email"
                                onHandleChange = {this.onHandleChange}
                                name = 'email'
                                onHandleBlur = {this.onHandleBlur}
                                error = {accountInfo.error.email}
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

                        {
                            accountInfo.isUpdatePassword ? (
                                <div className="update-password-group">
                                    <div className="form-group">
                                        <div className="input-label"><label>Mật khẩu cũ</label> </div>
                                        <InputFieldComponent 
                                            placeholder="Nhập mật khẩu cũ"
                                            value = {''} 
                                            onHandleChange = {this.onHandleChange}
                                            name = 'oldPassword'
                                            onHandleBlur = {this.onHandleBlur}
                                            error = {accountInfo.error.oldPassword}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="input-label"><label>Mật khẩu mới</label></div>
                                        <InputFieldComponent 
                                            placeholder="Nhập mật khẩu mới"
                                            value = {accountInfo.newPassword} 
                                            onHandleChange = {this.onHandleChange}
                                            name = 'newPassword'
                                            onHandleBlur = {this.onHandleBlur}
                                            error = {accountInfo.error.newPassword}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="input-label"><label>Nhập lại</label></div>
                                        <InputFieldComponent 
                                            placeholder="Nhập mật lại khẩu mới"
                                            value = {accountInfo.confirmPassword} 
                                            onHandleChange = {this.onHandleChange}
                                            name = 'confirmPassword'
                                            onHandleBlur = {this.onHandleBlur}
                                            error = {accountInfo.error.confirmPassword}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="input-label gender-label">Nhận mã xác nhận</div>
                                        <div className="input-group">
                                            <RadioFieldComponent 
                                                id = "email"
                                                name ="place-confirm"
                                                label = "Email"
                                                isChecked = {accountInfo.placeConfirm === 'email'}
                                                onHandleChange = {this.onHandleChange}
                                            />
                                            <RadioFieldComponent 
                                                id = "phone"
                                                name ="place-confirm"
                                                label = "Số điện thoại"
                                                isChecked = {accountInfo.placeConfirm !== 'email'}
                                                onHandleChange = {this.onHandleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }

                        

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
                password: accountInfo.password,
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
