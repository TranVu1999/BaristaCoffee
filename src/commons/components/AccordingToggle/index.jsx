import React from 'react';
import './style.scss'

function AccordingToggle(props) {
    return (
        <div className="accordition-toggle">
            {props.children}
        </div>
    );
}

export default AccordingToggle;