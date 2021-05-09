import React from 'react';
import PropTypes from 'prop-types';

SelectField.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    listOption: PropTypes.array,
    value: PropTypes.string,

    onGetSelection: PropTypes.func,
};

SelectField.defaultProps = {
    name: "",
    placeholder: "",
    listOption: [],
    value: "",

    onGetSelection: null
}

function SelectField(props) {

    const {name, placeholder, listOption, value} = props

    const onHanldeChange = event =>{
        if(props.onGetSelection && event.target.value !== placeholder){
            props.onGetSelection(event)
        }
    }

    const renderListOption = () =>{
        return listOption.map((item, index) =>{
            return (
                <option key = {index} value={item}>{item}</option>
            )
        })
    }

    return (
        <div className="input-group">
            <select 
                name = {name} 
                value = {value}
                onChange = {onHanldeChange}
            >
                <option value = {placeholder} >{placeholder}</option>
                {renderListOption()}
            </select>
        </div>
    );
}

export default SelectField;