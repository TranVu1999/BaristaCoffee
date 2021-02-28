import React, { Component } from 'react';
import './style.scss';

export default class Popup extends Component {
    render() {
        return (
            <div id="login-popup" className="popup login-popup">
                <div className="popup__container">
                    <div className="popup--header">
                    <h3>Account Login</h3>
                    <button id="btnCloseLoginPopup" className="close-popup">
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
