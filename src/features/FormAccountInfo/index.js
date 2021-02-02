import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actGetInfoApi} from './modules/action';

import InputFieldComponent from '../../components/InputField';
import InputPhoneNumberComponent from './../../components/InputPhoneNumber';
import InputUpdatePasswordComponent from './../../components/InputUpdatePassword';
import './style.scss';

class FormAccountInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            isUpdatePassword: false,
        }
    }

    handleUpdatePasswordForm = () =>{
        this.setState({isUpdatePassword: !this.state.isUpdatePassword});
    }
  
    renderUpdatePasswordForm = () =>{
        const {isUpdatePassword} = this.state;
        return isUpdatePassword ? (<InputUpdatePasswordComponent/>) : null;
    }

    handleOnChange = () =>{

    }


    render() {
        const userInfo = this.props.data;

        return (
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form className="account__info">

                    <div className="form-group">
                        <div className="input-label">Họ tên</div>
                        <InputFieldComponent 
                            value = {userInfo ? userInfo.fullname : null}
                            placeholder ="Nhập tên"
                        />
                    </div>

                    <InputPhoneNumberComponent 
                        value = {userInfo ? userInfo.phoneNumber : null} 
                    />

                    <div className="form-group">
                        <div className="input-label">Mã xác thực</div>
                        <InputFieldComponent placeholder = "Nhập mã xác thực"/>
                    </div>
                    
                    <div className="form-group">
                        <div className="input-label">Email </div>
                        <InputFieldComponent 
                            value = {userInfo ? userInfo.email : null} 
                            placeholder ="Nhập email"
                        />
                    </div>

                    <div className="form-group">
                        <div className="input-label gender-label">Giới tính</div>
                        <div className="input-group">
                        <div className="radio-group">
                            <input 
                                type="radio" 
                                name="gender" 
                                id="male" 
                                checked = {userInfo && userInfo.gender > 0 ? true : false}
                                onChange = {this.handleOnChange}
                            />
                            <label htmlFor="male">
                            <div className="label-radio" />
                            Nam
                            </label>
                        </div>
                        <div className="radio-group">
                            <input 
                                type="radio" 
                                name="gender" 
                                id="female" 
                                checked = {userInfo && userInfo.gender < 0 ? true : false}
                                onChange = {this.handleOnChange}
                            />
                            <label htmlFor="female">
                            <div className="label-radio" />
                            Nữ
                            </label>
                        </div>
                        </div>
                    </div>

                    <div className="form-group form-group--date">
                        <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                        <div className="select-group">
                        <select 
                            value = {userInfo ? userInfo.birthday.date : 0}
                            onChange={this.handleOnChange}
                        >
                            <option value = "0">Ngày</option>
                            <option value ="1">Ngày 1</option>
                            <option>Ngày 2</option>
                            <option>Ngày 3</option>
                            <option>Ngày 4</option>
                            <option>Ngày 5</option>
                            <option>Ngày 6</option>
                            <option>Ngày 7</option>
                            <option>Ngày 8</option>
                            <option>Ngày 9</option>
                            <option value ="10">Ngày 10</option>
                        </select>
                        <select 
                            value = {userInfo ? userInfo.birthday.month : 0}
                            onChange={this.handleOnChange}
                        >
                            <option value = "0">Tháng</option>
                            <option value = "1">Tháng 1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <select
                            value = {userInfo ? userInfo.birthday.year : 0}
                            onChange={this.handleOnChange}
                        >
                            <option value = "0">Năm</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option value = "1999">Năm 1999</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-label"></div>
                        <div className="input-group">
                        <div className="checkbox-group">
                            <input 
                                type="checkbox" 
                                id="update-password" 
                                onChange = {this.handleUpdatePasswordForm}
                            />
                            <label htmlFor="update-password">
                            <div className="label-checkbox" />
                                Thay đổi mật khẩu
                            </label>
                        </div>
                        </div>
                    </div>

                    {
                        this.renderUpdatePasswordForm()
                    }

                    <div className="form-group">
                        <div className="input-label" />
                        <button>Cập nhật</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
        this.props.fetchData(accountInfo.accountId);
    }
}

const mapStateToProps = state =>{
    return{
        loading: state.formAccountInfoReducer.loading,
        data: state.formAccountInfoReducer.data,
        errors: state.formAccountInfoReducer.errors,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchData: (data) =>{
            dispatch(actGetInfoApi(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAccountInfo)
