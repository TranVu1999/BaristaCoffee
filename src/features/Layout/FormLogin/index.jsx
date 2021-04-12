import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Popup from '../../../commons/components/Popup/Popup';

import * as Notify from './../../../commons/constant/Notify'
import * as Validate from './../../../commons/js/validate-input'
import {actCloseFormLogin} from './../../../commons/modules/LoginForm/acction'
import {actInitAccount} from './../../../commons/modules/Account/action'
import api from './../../../api'


function FormLogin(props) {
    const [username, setUsername] = useState({value: "", error: ""})
    const [password, setPassword] = useState({value: "", error: ""})
    const [loginNotify, setLoginNotify] = useState("")
    const isOpenLoginFrom = useSelector(state => state.loginFormReducer.isOpen)
    const dispatch = useDispatch()

    // Reset form login
    useEffect(() => {
        setUsername({value: "", error: ""})
        setPassword({value: "", error: ""})
        setLoginNotify("")

        return () =>{
            setUsername({value: "", error: ""})
            setPassword({value: "", error: ""})
            setLoginNotify("")
        }
    }, [])

    const onHandleClosePopup = () =>{
        dispatch(actCloseFormLogin())
    }

    const onHandleSubmit = (event) =>{
        event.preventDefault()
        let flag = true

        // Check username
        if(!username.value){
            flag = false
            setUsername({
                ...username,
                error: Notify.IS_EMPTY
            })
        }else if(!Validate.isEmail(username.value)){
            flag = false
            setUsername({
                ...username,
                error: Notify.IS_NOT_USERNAME
            })
        }

        // Check password
        if(!password.value){
            flag = false
            setPassword({
                ...password,
                error: Notify.IS_EMPTY
            })
        }else if(!Validate.isPassword(password.value)){
            flag = false
            setPassword({
                ...password,
                error: Notify.IS_NOT_PASSWORD
            })
        }

        // Check is acceptted submit
        if(flag){
            // Send to server
            api.post('auth/login', {
                username: username.value,
                password: password.value
            })
            .then(res =>{
                if(res.data.success){
                    localStorage.setItem("accessToken", res.data.accessToken)
                    dispatch(actInitAccount(res.data.accountInfo))
                }else{
                    setLoginNotify(res.data.message)
                }
            })
            .catch(err =>{
                console.log({err})
            })
        }

    }

    const onHandleChange = (event) =>{
        const {name, value} = event.target
        switch(name){
            case 'username':
                setUsername({
                    ...username,
                    value
                })
                break

            case 'password':
                setPassword({
                    ...password,
                    value
                })
                break
            default: break
        }
    }

    const onHandleFocus = (event) =>{
        const {name} = event.target
        switch(name){
            case 'username':
                setUsername({
                    ...username,
                    error: ""
                })
                break

            case 'password':
                setPassword({
                    ...password,
                    error: ""
                })
                break
            default: break
        }
    }

    return (
        <Popup
            isOpen = {isOpenLoginFrom}
            onHandleClosePopup = {onHandleClosePopup}
        >
            <form 
                className="login-form"
                onSubmit = {onHandleSubmit}
            >
                <div className="form-group">
                    <div className="input-label">Username</div>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Enter Your Email/or Phone number"
                            name="username"
                            value = {username.value}
                            onChange = {onHandleChange}
                            onFocus = {onHandleFocus}
                        />
                        {username.error && (<p className="notify warning">{username.error}</p>)}
                        
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-label">Password</div>

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Enter Your Password"
                            name="password"
                            value = {password.value}
                            onChange = {onHandleChange}
                            onFocus = {onHandleFocus}
                        />
                        {password.error && (<p className="notify warning">{password.error}</p>)}
                    </div>
                </div>

                <div className="form-group">
                    <button>Login</button>
                    {loginNotify && (<p className="notify warning">{loginNotify}</p>)}
                </div>

                <div className="form-group login-action">
                <NavLink to="signup">Create account?</NavLink>
                /
                <a href="/#">Forgot password?</a>
                </div>

                <div className="form-group other-signup">
                <span>Or Sign Up Using</span>
                <p>
                    <a href="/#" className="icon"><span aria-hidden="true" className="social_facebook" /></a>
                    <a href="/#" className="icon"><span aria-hidden="true" className="social_twitter" /></a>
                    <a href="/#" className="icon"><span aria-hidden="true" className="social_googleplus" /></a>
                </p>
                </div>
            </form>
        </Popup>
    );
}

export default FormLogin;