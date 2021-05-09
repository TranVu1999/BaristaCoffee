import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import InputField from './../../../commons/components/InputField'
import RadioField from './../../../commons/components/RadioField'
import SelectDate from '../../../commons/components/SelectDate'
import CheckboxField from './../../../commons/components/CheckboxField'
import './style.scss'

import * as Notify from './../../../commons/constant/Notify'
import * as Validate from "./../../../commons/js/validate-input"
import {
    standardDateTime, 
    standardNumber
} from './../../../commons/js/helpers'

import * as notify from './../../../commons/constant/Notify'
import {actOpenNotify} from './../../../commons/modules/Notify/action'
import {actAddNewNotify} from './../../../commons/modules/Account/action'
import api from './../../../api'



function AccountInfomation(props) {

    const dispatch = useDispatch()

    const fullnameStore = useSelector(state => state.accountReducer.fullname)
    const phoneNumberStore = useSelector(state => state.accountReducer.phoneNumber)
    const emailStore = useSelector(state => state.accountReducer.email)
    const genderStore = useSelector(state => state.accountReducer.gender)
    const birthdayStore = useSelector(state => state.accountReducer.birthday)
    
    const [fullname, setFullname] = useState({value: "", error: ""})
    const [phoneNumber, setPhoneNumber] = useState({value: "", error: ""})
    const [email, setEmail] = useState({value: "", error: ""})
    const [gender, setGender] = useState("male")
    const [birthday, setBirthday] = useState({date: 10, month: 1, year: 1999})
    const [isUpdatePassword, setIsUpdatePassword] = useState(false)
    const [oldPassword, setOldPassword] = useState({value: "", error: ""})
    const [newPassword, setNewPassword] = useState({value: "", error: ""})
    const [confirmNewPassword, setConfirmNewPassword] = useState({value: "", error: ""})
    const [typeVerify] = useState("email")

    // set fullname
    useEffect(() =>{
        setFullname({ value: fullnameStore, error: "" })
    }, [fullnameStore])

    // set phone number
    useEffect(() =>{
        setPhoneNumber({ value: phoneNumberStore, error: ""})
        
    }, [phoneNumberStore])

    // set email
    useEffect(() =>{
        setEmail({ value: emailStore, error: "" })
    }, [emailStore])

    // set gender
    useEffect(() =>{
        setGender(genderStore)
    }, [genderStore])

    // set birthday
    useEffect(() =>{
        const standardBirthday = standardDateTime(birthdayStore)

        
        if(birthdayStore){
            setBirthday({
                date: parseInt(standardNumber(standardBirthday.date)),
                month: parseInt(standardNumber(standardBirthday.month)),
                year: standardNumber(standardBirthday.year),

            })
        }
    }, [birthdayStore])

    const onHandleChange = event =>{
        const {value, name, id} = event.target

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
                break
            case 'oldPassword':
                setOldPassword({value, error: ""})
                break
            case 'newPassword':
                setNewPassword({value, error: ""})
                break
            case 'confirmNewPassword':
                setConfirmNewPassword({value, error: ""})
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
            case 'oldPassword':
                if(!value){
                    setOldPassword({
                        ...oldPassword, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isPassword(value)){
                    setOldPassword({
                        ...oldPassword, 
                        error: Notify.IS_NOT_PASSWORD
                    })
                }else {
                    api.post('auth/check-password', {password: oldPassword.value})
                    .then(res =>{
                        
                        if(res.data.success){
                            setOldPassword({
                                ...oldPassword, 
                                error: ""
                            }) 
                        }else{
                            setOldPassword({
                                ...oldPassword, 
                                error: "This password is not correct."
                            })
                        }
                    })
                    .catch(err =>{
                        console.log(err)
                    })
                }
                break
            case 'newPassword':
                if(!value){
                    setNewPassword({
                        ...newPassword, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isPassword(value)){
                    setNewPassword({
                        ...newPassword, 
                        error: Notify.IS_NOT_PASSWORD
                    })
                }
                break
            case 'confirmNewPassword':
                if(!value){
                    setConfirmNewPassword({
                        ...confirmNewPassword, 
                        error: Notify.IS_EMPTY
                    })
                }else if(newPassword.value !== confirmNewPassword.value){
                    setConfirmNewPassword({
                        ...confirmNewPassword, 
                        error: "Your confirmation password does not match"
                    })
                }
                break
            default:
                break
        }
    }

    const onHandleUpdateAccountInfo = event =>{
        event.preventDefault()

        let flag = true

        // check fullname
        if(!fullname.value){
            setFullname({...fullname, error: notify.IS_EMPTY})
            flag = false
        }else if(fullname.error){
            flag = false
        }

        // check phone number
        if(!phoneNumber.value){
            setPhoneNumber({...phoneNumber, error: notify.IS_EMPTY})
            flag = false
        }else if(phoneNumber.error){
            flag = false
        }

        // check email
        if(!email.value){
            setEmail({...email, error: notify.IS_EMPTY})
            flag = false
        }else if(email.error){
            flag = false
        }

        if(isUpdatePassword){
            // check old password
            if(!oldPassword.value){
                setOldPassword({...oldPassword, error: notify.IS_EMPTY})
                flag = false
            }else if(oldPassword.error){
                flag = false
            }

            // check new password
            if(!newPassword.value){
                setNewPassword({...newPassword, error: notify.IS_EMPTY})
                flag = false
            }else if(newPassword.error){
                flag = false
            }

            // check confirm new password
            if(!confirmNewPassword.value){
                setConfirmNewPassword({...confirmNewPassword, error: notify.IS_EMPTY})
                flag = false
            }else if(confirmNewPassword.error){
                flag = false
            }
        }       


        // check accept
        if(flag){
            const data = {
                fullname: fullname.value, 
                phoneNumber: phoneNumber.value,
                email: email.value,
                gender,
                birthday: {
                    date: birthday.date + 1,
                    month: birthday.month - 1,
                    year: birthday.year
                },
                newPassword: newPassword.value
            }
    
            api.post('auth/update', data)
            .then(res =>{
                if(res.data.success){
                    dispatch(actOpenNotify({
                        isSuccess: true,
                        content: notify.SUCCESS_NOTIFY
                    }))

                    if(res.data.notify){
                        dispatch(actAddNewNotify(res.data.notify))
                    }
                }
            })
            .catch(err =>{
                console.log(err)
                dispatch(actOpenNotify({
                    isSuccess: false,
                    content: notify.FAIL_NOTIFY
                }))
            })
        }else{
            dispatch(actOpenNotify({
                isSuccess: false,
                content: notify.FAIL_NOTIFY
            }))
        }

        

        
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
                                <SelectDate 
                                    name = "date"
                                    year = {birthday.year}
                                    month = {birthday.month}
                                    value = {birthday.date}
                                    onSelectChange={onHandleChange}
                                />
                                <SelectDate 
                                    name = "month"
                                    value = {birthday.month}
                                    onSelectChange={onHandleChange}
                                    
                                />
                                <SelectDate 
                                    name = "year"
                                    value = {birthday.year}
                                    onSelectChange={onHandleChange}
                                />
                            </div>
                        </div>

                        {/* Open update form password */}
                        <div className="form-group">
                            <div className="input-label"></div>
                            <div className="input-group">
                                <CheckboxField
                                    onGetChecked = {handleOpenUpdatePasswordForm}
                                    isChecked = {isUpdatePassword}
                                    id = "update-password"
                                    label = "Thay đổi mật khẩu"
                                />
                            </div>
                        </div>

                        {
                            isUpdatePassword ? (
                                <div className="update-password-group">
                                    {/* Old password */}
                                    <div className="form-group">
                                        <div className="input-label"><label>Mật khẩu cũ</label> </div>
                                        <InputField
                                            placeholder="Nhập mật khẩu cũ"
                                            value = {oldPassword.value} 
                                            onHandleChange = {onHandleChange}
                                            name = 'oldPassword'
                                            onHandleBlur = {onHandleBlur}
                                            error = {oldPassword.error}
                                        />
                                    </div>
                                    
                                    {/* New password */}
                                    <div className="form-group">
                                        <div className="input-label"><label>Mật khẩu mới</label></div>
                                        <InputField
                                            placeholder="Nhập mật khẩu mới"
                                            value = {newPassword.value} 
                                            onHandleChange = {onHandleChange}
                                            name = 'newPassword'
                                            onHandleBlur = {onHandleBlur}
                                            error = {newPassword.error}
                                        />
                                    </div>

                                    {/* Confirm new password */}
                                    <div className="form-group">
                                        <div className="input-label"><label>Nhập lại</label></div>
                                        <InputField
                                            placeholder="Nhập mật lại khẩu mới"
                                            value = {confirmNewPassword.value} 
                                            onHandleChange = {onHandleChange}
                                            name = 'confirmNewPassword'
                                            onHandleBlur = {onHandleBlur}
                                            error = {confirmNewPassword.error}
                                        />
                                    </div>
                                    
                                    {/* Type verify */}
                                    <div className="form-group">
                                        <div className="input-label gender-label">Nhận mã xác nhận</div>
                                        <div className="input-group">
                                            <RadioField
                                                id = "email"
                                                name ="place-confirm"
                                                label = "Email"
                                                isChecked = {typeVerify === 'email'}
                                                onHandleChange = {onHandleChange}
                                            />
                                            <RadioField
                                                id = "phone"
                                                name ="place-confirm"
                                                label = "Số điện thoại"
                                                isChecked = {typeVerify !== 'email'}
                                                onHandleChange = {onHandleChange}
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