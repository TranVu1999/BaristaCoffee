import React, { Component } from 'react';
import Banner from './../../commons/components/Banner';
import './style.scss';

export default class SignUpPage extends Component {
    render() {
        return (
            <>
                <Banner bannerTitle = "Register Page"/>

                <section className="main-page cf-bg section-padding">
                    <div className="cf-container signup-page">
                        <div className="d-flex-between signup__content">
                        <div className="signup--left">
                            <h2>Reserve your table here</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.</p>
                            <form className="form form-signup">
                            <div className="form-group">
                                <input type="text" className="input-control" placeholder="Full name ..." />
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-control" placeholder="Your email ..." />
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-control" placeholder="Password ..." />
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-control" placeholder="Confirm password" />
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
}
