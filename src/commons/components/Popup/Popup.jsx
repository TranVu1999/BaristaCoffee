import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Popup.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
};

Popup.defaultProps = {
    isOpen: false,
    title: "Pop up"
}

function Popup(props) {
    const {isOpen, title} = props
    const onHandleClosePopup = () =>{
        props.onHandleClosePopup()
    }
    
    return (
        <div 
                className = {isOpen ? "popup active" : "popup"}
            >
                <div className="popup__container">
                    <div className="popup--header">
                    <h3>{title ? title : "Account Login"}</h3>
                    <button 
                        className="close-popup"
                        onClick = {onHandleClosePopup}
                    >
                        <span aria-hidden="true" className="icon_close_alt2" />
                    </button>
                    </div>

                    <div className="popup--body">
                        {props.children}
                    </div>
                </div>
            </div>
    );
}

export default Popup;