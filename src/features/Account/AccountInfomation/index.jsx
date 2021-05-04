import React, {useState} from 'react';
import PropTypes from 'prop-types';
import InputField from './../../../commons/components/InputField'
import RadioField from './../../../commons/components/RadioField'
import SelectField from './../../../commons/components/SelectField'
import CheckboxField from './../../../commons/components/CheckboxField'
import './style.scss'

import * as Notify from './../../../commons/constant/Notify'
import * as Validate from "./../../../commons/js/validate-input"

AccountInfomation.propTypes = {
    
};

function AccountInfomation(props) {
    const [fullname, setFullname] = useState({value: "", error: ""})
    const [phoneNumber, setPhoneNumber] = useState({value: "", error: ""})
    const [email, setEmail] = useState({value: "", error: ""})
    const [gender, setGender] = useState("male")
    const [birthday, setBirthday] = useState({date: 10, month: 1, year: 1999})
    const [isUpdatePassword, setIsUpdatePassword] = useState(false)
    


    const onHandleChange = event =>{
        const {value, name, id} = event.target
        console.log({name})

        switch(name){
            case 'fullname':
                setFullname({value, error: ""})
                break
            case 'phoneNumber':
                setPhoneNumber({value, error: ""})
                break
            case 'email':
                setEmail({value, error: ""})
                break
            case 'gender':
                setGender(id)
                break
            case 'date':
            case 'month':
            case 'year':
                setBirthday({
                    ...birthday,
                    [name]: value
                })
                console.log(value)
                break
            
            default:
                break
        }
    }

    const onHandleBlur = event =>{
        const {value, name} = event.target

        switch(name){
            case 'fullname':
                if(!value){
                    setFullname({
                        ...fullname, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isFullname(value)){
                    setFullname({
                        ...fullname, 
                        error: Notify.IS_NOT_FULLNAME
                    })
                }
                break
                
            case 'phoneNumber':
                if(!value){
                    setPhoneNumber({
                        ...phoneNumber, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isPhoneNumber(value)){
                    setPhoneNumber({
                        ...phoneNumber, 
                        error: Notify.IS_NOT_PHONE_NUMBER
                    })
                }
                break

            case 'email':
                if(!value){
                    setEmail({
                        ...email, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isEmail(value)){
                    setEmail({
                        ...email, 
                        error: Notify.IS_NOT_EMAIL
                    })
                }
                break
            default:
                break
        }
    }

    const onHandleUpdateAccountInfo = event =>{
        event.preventDefault()
    }

    const handleOpenUpdatePasswordForm = event =>{
        setIsUpdatePassword(!isUpdatePassword)
    }

    return (
        <>
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form 
                        className="account__info"
                        onSubmit = {onHandleUpdateAccountInfo}
                    >

                        {/* Full name */}
                        <div className="form-group">
                            <div className="input-label">Họ tên</div>
                            <InputField
                                value = {fullname.value}
                                placeholder ="Nhập tên"
                                onHandleChange = {onHandleChange}
                                name = 'fullname'
                                onHandleBlur = {onHandleBlur}
                                error = {fullname.error}
                            />
                            
                        </div>

                        {/* Phone number */}
                        <div className="form-group">
                            <div className="input-label">Số điện thoại</div>
                            <InputField
                                value = {phoneNumber.value} 
                                placeholder ="Nhập số điện thoại"
                                onHandleChange = {onHandleChange}
                                name = 'phoneNumber'
                                onHandleBlur = {onHandleBlur}
                                error = {phoneNumber.error}
                            />
                        </div>
                        
                        {/* Email */}
                        <div className="form-group">
                            <div className="input-label">Email </div>
                            <InputField
                                value = {email.value} 
                                placeholder ="Nhập email"
                                onHandleChange = {onHandleChange}
                                name = 'email'
                                onHandleBlur = {onHandleBlur}
                                error = {email.error}
                            />
                        </div>

                        {/* Gender */}
                        <div className="form-group">
                            <div className="input-label gender-label">Giới tính</div>
                            <div className="input-group">
                                <RadioField
                                    id = "male"
                                    name ="gender"
                                    label = "Nam"
                                    isChecked = {gender === "male"}
                                    onHandleChange = {onHandleChange}
                                />
                                <RadioField
                                    id = "female"
                                    name ="gender"
                                    label = "Nữ"
                                    isChecked = {gender === "female"}
                                    onHandleChange = {onHandleChange}
                                />
                            </div>
                        </div>

                        {/* Birthdate */}
                        <div className="form-group form-group--date">
                            <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                            <div className="select-group">
                                <SelectField 
                                    name = "date"
                                    year = {birthday.date}
                                    month = {birthday.month}
                                    value = {birthday.year}
                                    onSelectChange={onHandleChange}
                                />
                                <SelectField 
                                    name = "month"
                                    value = {birthday.month}
                                    onSelectChange={onHandleChange}
                                    
                                />
                                <SelectField 
                                    name = "year"
                                    value = {birthday.year}
                                    onSelectChange={onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-label"></div>
                            <div className="input-group">
                                <CheckboxField
                                    onOpenUpdatePassword = {handleOpenUpdatePasswordForm}
                                    isUpdatePassword = {isUpdatePassword}
                                    id = "update-password"
                                />
                            </div>
                        </div>

                        {
                            isUpdatePassword ? (
                                <div className="update-password-group">
                                    <div className="form-group">
                                        <div className="input-label"><label>Mật khẩu cũ</label> </div>
                                        <InputField
                                            placeholder="Nhập mật khẩu cũ"
                                            value = {''} 
                                            // onHandleChange = {this.onHandleChange}
                                            name = 'oldPassword'
                                            // onHandleBlur = {this.onHandleBlur}
                                            // error = {accountInfo.error.oldPassword}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="input-label"><label>Mật khẩu mới</label></div>
                                        <InputField
                                            placeholder="Nhập mật khẩu mới"
                                            // value = {accountInfo.newPassword} 
                                            // onHandleChange = {this.onHandleChange}
                                            name = 'newPassword'
                                            // onHandleBlur = {this.onHandleBlur}
                                            // error = {accountInfo.error.newPassword}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="input-label"><label>Nhập lại</label></div>
                                        <InputField
                                            placeholder="Nhập mật lại khẩu mới"
                                            // value = {accountInfo.confirmPassword} 
                                            // onHandleChange = {this.onHandleChange}
                                            name = 'confirmPassword'
                                            // onHandleBlur = {this.onHandleBlur}
                                            // error = {accountInfo.error.confirmPassword}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="input-label gender-label">Nhận mã xác nhận</div>
                                        <div className="input-group">
                                            <RadioField
                                                id = "email"
                                                name ="place-confirm"
                                                label = "Email"
                                                // isChecked = {accountInfo.placeConfirm === 'email'}
                                                // onHandleChange = {this.onHandleChange}
                                            />
                                            <RadioField
                                                id = "phone"
                                                name ="place-confirm"
                                                label = "Số điện thoại"
                                                // isChecked = {accountInfo.placeConfirm !== 'email'}
                                                // onHandleChange = {this.onHandleChange}
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
        </>
    );
}

export default AccountInfomation;