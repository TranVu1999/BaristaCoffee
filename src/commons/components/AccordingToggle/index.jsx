import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

AccordingToggle.propTypes = {
    label: PropTypes.string,
    span: PropTypes.string,
};

AccordingToggle.defaultProps = {
    label: "",
    span: ""
}

function AccordingToggle(props) {

    const {label, span} = props

    const [isOpen, setIsOpen] = useState(false)

    const onHanldeOpenToggle = () =>{
        setIsOpen(!isOpen)
    }
    
    return (
        <div className = {isOpen ? "accordition-toggle open" : "accordition-toggle"}>
            <div class="accordition-toggle--box">
                <div class="accordition-span">
                    {label}
                    <span onClick = {onHanldeOpenToggle}>{span}</span>
                </div>
                <div class="accordition-detail">
                    {props.children}
                </div>
            </div>
        </div>
        
    );
}

export default AccordingToggle;