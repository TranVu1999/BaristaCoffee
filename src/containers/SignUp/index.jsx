import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

import BannerFull from './../../commons/components/BannerFull'
import FormSignUp from '../../features/SignUp/FormSignUp';

SignUpPage.propTypes = {
    
};

function SignUpPage(props) {
    return (
        <>
            <BannerFull title = "Register Page"/>

            <section className="main-page cf-bg section-padding">
                <div className="cf-container signup-page">
                    <div className="d-flex-between signup__content">
                        <div className="signup--left">
                            <h2>Sign up here</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.</p>
                            <FormSignUp/>
                            
                        </div>
                        <div className="signup--right">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/Reservation-N-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUpPage;