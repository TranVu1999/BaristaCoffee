import React, { Component } from 'react';
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

    render() {
        console.log(this.state)

        return (
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form className="account__info">

                    <div className="form-group">
                        <div className="input-label">Họ tên</div>
                        <InputFieldComponent value = "Trần Lê Anh Vũ" placeholder ="Nhập tên"/>
                    </div>

                    <InputPhoneNumberComponent/>

                    <div className="form-group">
                        <div className="input-label">Mã xác thực</div>
                        <InputFieldComponent placeholder = "Nhập mã xác thực"/>
                    </div>
                    
                    <div className="form-group">
                        <div className="input-label">Email </div>
                        <InputFieldComponent 
                            value = "Tranvudpqn123@gmail.com" 
                            placeholder ="Nhập email"
                        />
                    </div>

                    <div className="form-group">
                        <div className="input-label gender-label">Giới tính</div>
                        <div className="input-group">
                        <div className="radio-group">
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="male">
                            <div className="label-radio" />
                            Nam
                            </label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" name="gender" id="female" />
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
                        <select>
                            <option>Ngày</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <select>
                            <option>Tháng</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <select>
                            <option>Năm</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
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
}

export default FormAccountInfo
