import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

CheckboxField.propTypes = {
    id: PropTypes.string,
    isChecked: PropTypes.bool,
    label: PropTypes.string,

    onGetChecked: PropTypes.func,
};

CheckboxField.defaultProps = {
    id: "",
    isChecked: "",
    label: "",

    onGetChecked: null
}

function CheckboxField(props) {

    const {id, isChecked, label} = props

    const onHandleChange = event =>{
        if(props.onGetChecked){
            props.onGetChecked(event)
        }
    }

    return (
        <div className="checkbox-group">
            <input 
                type="checkbox" 
                id = {id} 
                onChange = {onHandleChange}
                checked = {isChecked}
            />
            <label htmlFor =  {id}>
                <div className="label-checkbox"></div>
                {label}
            </label>
        </div>
    );
}

export default CheckboxField;