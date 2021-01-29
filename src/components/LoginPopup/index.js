import React, { Component } from 'react';
import './style.scss';

export default class LoginComponent extends Component {


    render() {
        const {isOpenLogin, isClosePopup} = this.props;
        return (
            <div 
                id="login-popup" 
                className = {isOpenLogin ? 'login-popup active' : 'login-popup'}
            >
                <div className="login__container">
                    <div className="login--header">
                        <h3>Account Login</h3>
                        <button 
                            id="btnCloseLoginPopup" 
                            className="close-popup"
                            onClick = {() => {isClosePopup(false)}}
                        >
                            <span aria-hidden="true" className="icon_close_alt2" />
                        </button>
                    </div>

                    <div className="login--body">
                        <form className="login-form">
                            <div className="form-group">
                                <div className="input-label">Email / Username</div>
                                <div className="input-group">
                                    <input type="text" placeholder="Please Enter Your Email/Account" /> 
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-label">Password</div>
                                <div className="input-group">
                                    <input type="text" placeholder="Please Enter Password" /> 
                                </div>
                            </div>

                            <div className="form-group">
                                <button>Login</button>
                            </div>

                            <div className="form-group login-action">
                                <a href="/#">Create account?</a>
                                /
                                <a href="/#">Forgot password?</a>
                            </div>

                            <div className="form-group other-signup">
                                <span>Or Sign Up Using</span>
                                <p>
                                    <a href="/#" className="icon">
                                        <span aria-hidden="true" className="social_facebook"></span>
                                    </a>
                                    <a href="/#" className="icon">
                                        <span aria-hidden="true" className="social_twitter"></span>
                                    </a>
                                    <a href="/#" className="icon">
                                        <span aria-hidden="true" className="social_googleplus"></span>
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
