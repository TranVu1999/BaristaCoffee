import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Radiofield.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    isChecked: PropTypes.bool,

    onHandleChange: PropTypes.func,
};

Radiofield.defaultProps = {
    id: "",
    name: "",
    label: "",
    isChecked: false,

    onHandleChange: null
}

function Radiofield(props) {

    const {
        id,
        name,
        label,
        isChecked
    } = props

    const onHandleChange = event =>{
        if(props.onHandleChange){
            props.onHandleChange(event)
        }
    }

    return (
        <div className="radio-group">
            <input 
                type="radio" 
                id = {id}
                name= {name}
                checked = {isChecked}
                onChange = {onHandleChange}

            />
            <label htmlFor = {id}>
            <div className="label-radio" />
                {label}
            </label>
        </div>
    );
}

export default Radiofield;