import React, { Component } from 'react';
import './style.scss';

export default class AccordingToggle extends Component {
    render() {
        return (
            <div className="accordition-toggle">
                <div className="accordition-toggle--box">
                    <div className = "accordition-span">Your cart is currently empty.</div>
                    
                </div>
            </div>

        )
    }
}
