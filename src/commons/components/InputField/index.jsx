import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

InputField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    erro: PropTypes.string,

    onHanldeChange: PropTypes.func,
    onHandleBlur: PropTypes.func,
};

InputField.defaultProps = {
    value: "",
    placeholder: "",
    name: "",
    error: ""
}

function InputField(props) {

    const {
        value,
        placeholder,
        name,
        error
    } = props

    const onHandleChange = (event) =>{
        if(props.onHandleChange){
            props.onHandleChange(event)
        }
    }

    const onHandleBlur = (event) =>{
        if(props.onHandleBlur){
            props.onHandleBlur(event)
        }
    }

    return (
        <div className="input-group relative-notify">
            <input 
                type="text" 
                value= {value}
                placeholder = {placeholder} 
                onChange = {onHandleChange}
                onBlur = {onHandleBlur}
                name = {name}
                className = {error ? "error" : ""}
            /> 

            {
                error ? (
                    <div className = "notify-box">
                        <span aria-hidden="true" class="icon_error-circle notify-icon"></span>
                        <p className = "notify warning notify-content">{error}</p>
                    </div>
                ): null
            }

            
        </div>
    );
}

export default InputField;