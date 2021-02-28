import React, { Component } from 'react'
import Popup from '../Popup';

export default class Login extends Component {
    render() {
        return (
            <>
                <Popup>
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
                            <a href="/#" className="icon"><span aria-hidden="true" className="social_facebook" /></a>
                            <a href="/#" className="icon"><span aria-hidden="true" className="social_twitter" /></a>
                            <a href="/#" className="icon"><span aria-hidden="true" className="social_googleplus" /></a>
                        </p>
                        </div>
                    </form>
                </Popup>
            </>
        )
    }
}
