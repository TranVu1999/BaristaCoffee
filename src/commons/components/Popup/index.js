import React, { Component } from 'react';
import './style.scss';

class Popup extends Component {
    onHandleOpenLoginForm = () =>{
        this.props.onHandleOpenLoginForm(false);
    }

    render() {
        const {isOpen} = this.props;
        return (
            <div 
                className = {isOpen ? "popup active" : "popup"}
            >
                <div className="popup__container">
                    <div className="popup--header">
                    <h3>Account Login</h3>
                    <button 
                        className="close-popup"
                        onClick = {this.onHandleOpenLoginForm}
                    >
                        <span aria-hidden="true" className="icon_close_alt2" />
                    </button>
                    </div>

                    <div className="popup--body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;
