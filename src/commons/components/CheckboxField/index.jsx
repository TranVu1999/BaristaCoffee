import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

CheckboxField.propTypes = {
    id: PropTypes.string,
    isUpdatePassword: PropTypes.bool,

    onOpenUpdatePassword: PropTypes.func,
};

CheckboxField.defaultProps = {
    id: "",
    isUpdatePassword: "",

    onOpenUpdatePassword: null
}

function CheckboxField(props) {

    const {id, isUpdatePassword} = props

    const onHandleChange = event =>{
        if(props.onOpenUpdatePassword){
            props.onOpenUpdatePassword(event)
        }
    }

    return (
        <div className="checkbox-group">
            <input 
                type="checkbox" 
                id = {id} 
                onChange = {onHandleChange}
                checked = {isUpdatePassword}
            />
            <label htmlFor =  {id}>
                <div className="label-checkbox"></div>
                Thay đổi mật khẩu
            </label>
        </div>
    );
}

export default CheckboxField;