import React, { Component } from 'react';
import Banner from './../../commons/components/Banner';
import './style.scss';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: "",
            username: "",
            password: "",
            confirmPassword: ""
        }
    }

    onHandlechange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onHanldeSubmit = (event) =>{
        event.preventDefault();
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
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Your email or phone number ..." 
                                        name = "username"
                                        value = {accountInfo.email}
                                        onChange = {this.onHandlechange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Password ..." 
                                        name = "password"
                                        value = {accountInfo.password}
                                        onChange = {this.onHandlechange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="input-control" 
                                        placeholder="Confirm password ..."
                                        name = "confirmPassword"
                                        value = {accountInfo.confirmPassword}
                                        onChange = {this.onHandlechange} 
                                    />
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
