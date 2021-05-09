import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

ConfirmInfomation.propTypes = {
    
};

function ConfirmInfomation(props) {
    return (
        <div className="confirm-info">
            <h3>BilLing &amp; Shipping</h3>
            {props.children}
        </div>
    );
}

export default ConfirmInfomation;