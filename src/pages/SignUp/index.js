import React, { Component } from 'react';
import Banner from './../../commons/components/Banner';
import './style.scss';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';
import * as Validate from "./../../commons/js/validate-input";
import * as Notify from "./../../commons/constant/Notify";

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: "",
            username: "",
            password: "",
            confirmPassword: "",
            error: {
                fullname: "",
                username: "",
                password: "",
                confirmPassword: ""
            }
        }
    }

    onHandlechange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value,
            error: {
                ...this.state.error,
                [name]: ""
            }
        })
    }

    onHandleBlur = event =>{
        const {name, value} = event.target;
        let isError = false;
        let error = {
            [name]: value
        }

        // Bước 1: Kiểm tra fullname có hợp lệ
        if(name === "fullname" && !Validate.isFullname(value)){
            isError = true
            error[name] = Notify.IS_NOT_FULLNAME
        }

        // Bước 2: Kiểm tra username có hợp lệ
        if(name === "username" && 
            (!Validate.isEmail(value) || Validate.isPhonenumber(value))
        ){
            isError = true
            error[name] = Notify.IS_NOT_USERNAME
        }

        // Bước 3: Kiểm tra password có hợp lệ
        if(name === "password" && !Validate.isPassword(value)){
            isError = true
            error[name] = Notify.IS_NOT_PASSWORD
        }

        // Bước 4: Kiểm tra confirm password có hợp lệ
        if(name === "confirmPassword" && value === this.state.password){
            isError = true
            error[name] = Notify.IS_NOT_CONFIRMPASSWORD
        }

        // Bước 5: Kiểm tra dữ liệu rỗng
        if(Validate.isEmpty(value)){
            isError = true;
            error[name] = Notify.IS_EMPTY
        }

        if(isError){
            this.setState({
                ...this.state,
                error: {
                    ...this.state.error,
                    ...error
                }
            })
        }
    }

    onHanldeSubmit = (event) =>{
        event.preventDefault();
        const accountInfo = this.state;

        const error = {
            fullname: !accountInfo.fullname ? Notify.IS_EMPTY : "",
            username: !accountInfo.username ? Notify.IS_EMPTY : "",
            password: !accountInfo.password ? Notify.IS_EMPTY : "",
            confirmPassword: !accountInfo.fullname ? Notify.IS_EMPTY : ""
        }

        if(error.fullname || error.username || error.password || error.confirmPassword){
            this.setState({
                ...this.state,
                error
            })
        }



        
    }

    render() {
        const accountInfo = this.state;

        return (
            <>
                <Banner bannerTitle = "Register Page"/>

                <section className="main-page cf-bg section-padding">
                    <div className="cf-container signup-page">
                        <div className="d-flex-between signup__content">
                        <div className="signup--left">
                            <h2>Sign up here</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.</p>
                            <form 
                                className="form form-signup"
                                onSubmit = {this.onHanldeSubmit}
                            >
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Full name ..." 
                                        name = "fullname"
                                        value = {accountInfo.fullname}
                                        onChange = {this.onHandlechange}
                                        onBlur = {this.onHandleBlur}
                                    />
                                    <p class="notify warning">{accountInfo.error.fullname}</p>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Your email or phone number ..." 
                                        name = "username"
                                        value = {accountInfo.email}
                                        onChange = {this.onHandlechange}
                                        onBlur = {this.onHandleBlur}
                                    />
                                    <p class="notify warning">{accountInfo.error.username}</p>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Password ..." 
                                        name = "password"
                                        value = {accountInfo.password}
                                        onChange = {this.onHandlechange}
                                        onBlur = {this.onHandleBlur}
                                    />
                                    <p class="notify warning">{accountInfo.error.password}</p>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Confirm password ..."
                                        name = "confirmPassword"
                                        value = {accountInfo.confirmPassword}
                                        onChange = {this.onHandlechange} 
                                        onBlur = {this.onHandleBlur}
                                    />
                                    <p class="notify warning">{accountInfo.error.confirmPassword}</p>
                                </div>
                                <div className="form-group">
                                    <button className="barista-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup--right">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/Reservation-N-4.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }

    
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignUpPage)
