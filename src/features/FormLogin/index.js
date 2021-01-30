import React, { Component } from 'react';
import InputPasswordComponent from './../../components/InputPassword';
import InputEmailComponent from './../../components/InputEmail';

export default class FormLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
    }

    getEmail = (email) =>{
        this.setState({
            email
        }, () => {
            console.log('Form login', email);
        })
    }


    render() {
        return (
            <form className="login-form">
                <div className="form-group">
                    <div className="input-label">Email / Username</div>
                    <InputEmailComponent
                        onGetEmail = {this.getEmail}
                    />
                </div>

                <div className="form-group">
                    <div className="input-label">Password</div>
                    <InputPasswordComponent/>
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
        )
    }
}
