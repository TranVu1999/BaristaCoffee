import React, { Component } from 'react';
import * as Other from './../../commons/constant/Other';

export default class SelectFieldComponent extends Component {

    onHandleChange = (event) =>{
        this.props.onSelectChange(event);
    }

    renderOption = () =>{
        const {name} = this.props;
        if(name === 'year'){
            return Other.LIST_YEAR.map(item =>{
                return (
                    <option 
                        key = {item} 
                        value = {item}
                    >Năm {item}</option>
                )
            })
        }
        return null;
    }

    render() {
        const {value} = this.props;
        return (
            <select 
                value = {value}
                onChange={this.onHandleChange}
            >
                {this.renderOption()}
            </select>
        )
    }
}
