import React, {useState} from 'react';
import PropTypes from 'prop-types';

import * as Notify from './../../../commons/constant/Notify'

FormSignUp.propTypes = {
    
};

function FormSignUp(props) {
    const [isOpenSumitCode, setIsOpenSumitCode] = useState(false)
    const [fullname, setFullname] = useState({value: "", error: ""})
    const [username, setUsername] = useState({value: "", error: ""})
    const [password, setPassword] = useState({value: "", error: ""})
    const [confirmPassword, setConfirmPassword] = useState({value: "", error: ""})
    const [confirmCode, setConfirmCode] = useState({
        value: "", 
        error: "",
        time: "",
        confirmCode: ""
    })

    /**
     * Submit account info
     */
    const onHanldeSubmitAccountInfo = (event) =>{
        event.preventDefault()

        let data = {value: "", error: Notify.IS_EMPTY}
        let flag = true 

        if(!username.value){
            flag = false
            setUsername(data)
        }

        if(!fullname.value){
            flag = false
            setFullname(data)
        }

        if(!password.value){
            flag = false
            setPassword(data)
        }

        if(!confirmPassword.value){
            flag = false
            setConfirmPassword(data)
        }

        if(flag){
            setIsOpenSumitCode(true)
        }
    }

    const onHandleChange = (event) =>{
        // Input change value
        const {name, value} = event.target
        let data = {value, error: ""}

        // Check is empty
        if(!value){
            data = {value: "", error: Notify.IS_EMPTY}
        }

        switch(name){
            case 'fullname':
                setFullname(data)
                break

            case 'username':
                setUsername(data)
                break

            case 'password':
                setPassword(data)
                break

            case 'confirmPassword':
                setConfirmPassword(data)
                break
            default:
                break
        }
    }

    const onHandleBlur= (event) =>{
        // Input change value
        const {name, value} = event.target

        // Check is empty
        if(!value){
            let data = {value: "", error: Notify.IS_EMPTY}

            switch(name){
                case 'fullname':
                    setFullname(data)
                    break
    
                case 'username':
                    setUsername(data)
                    break
    
                case 'password':
                    setPassword(data)
                    break
    
                case 'confirmPassword':
                    setConfirmPassword(data)
                    break
                default:
                    break
            }
        }
         
    }

    /**
     * Confirm code
     */
    const onHandleSubmitConfirmCode = (event) =>{
        event.preventDefault()
    }

    const onCloseSubmitCode = () =>{
        setIsOpenSumitCode(false)
    }

    return (
        <div 
            
            className = {
                isOpenSumitCode ? "slide-form open-submit-code" : "slide-form"
            }
        >
            <div className = "form-box">
                <form 
                    className="form form-signup"
                    onSubmit = {onHanldeSubmitAccountInfo}
                >
                    <div className="form-group">
                        <input 
                            type="text" 
                            className = {fullname.error ? "input-control warning" : "input-control"} 
                            placeholder="Full name ..." 
                            name = "fullname"
                            value = {fullname.value}
                            onChange = {onHandleChange}
                            onBlur = {onHandleBlur}
                        />

                        <p class="notify warning">{fullname.error}</p>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className = {username.error ? "input-control warning" : "input-control"}  
                            placeholder="Your email or phone number ..." 
                            name = "username"
                            value = {username.value}
                            onChange = {onHandleChange}
                            onBlur = {onHandleBlur}
                        />
                        <p class="notify warning">{username.error}</p>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className = {password.error ? "input-control warning" : "input-control"} 
                            placeholder="Password ..." 
                            name = "password"
                            value = {password.value}
                            onChange = {onHandleChange}
                            onBlur = {onHandleBlur}
                        />
                        <p class="notify warning">{password.error}</p>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className = {confirmPassword.error ? "input-control warning" : "input-control"} 
                            placeholder="Confirm password ..."
                            name = "confirmPassword"
                            value = {confirmPassword.value}
                            onChange = {onHandleChange} 
                            onBlur = {onHandleBlur}
                        />
                        <p class="notify warning">{confirmPassword.error}</p>
                    </div>
                    <div className="form-group">
                        <button className="barista-btn">Submit</button>
                    </div>
                </form>

            </div>
            
            <div className = "form-box">
                <form 
                    className = "form"
                    onSubmit = {onHandleSubmitConfirmCode}
                >
                    <div className = "form-group">
                        <input 
                            type="text" 
                            placeholder="Your code ..." 
                            className = {confirmCode.error ? "input-control mb-25 warning" : "input-control mb-25"} 
                            name ="confirmCode"
                            onChange = {onHandleChange}
                            value = {confirmCode.value}
                        />
                        <p class="notify warning">{confirmCode.error}</p>
                        <button className="barista-btn ">Apply</button>
                    </div>
                    <p>We just sent a confirmation code to your email. Please check your email and re-enter this confirmation code. This confirmation code is valid for 3 minutes only</p>
                </form>
                <button 
                    class="barista-read-more before"
                    onClick = {onCloseSubmitCode}
                ><span aria-hidden="true" class="arrow_left"></span> Return</button>
            </div>
        </div>
    );
}

export default FormSignUp;