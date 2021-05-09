import React from 'react';
import PropTypes from 'prop-types';
import * as Other from '../../constant/Other';

SelectDate.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,

    onHandleChange: PropTypes.func,
};

SelectDate.defaultProps = {
    value: "10",
    name: "",
    month: "1",
    year: "1990",

    onSelectChange: null
}

function SelectDate(props) {

    const {value, name, month, year} = props

    const onHandleChange = event =>{
        if(props.onSelectChange){
            props.onSelectChange(event)
        }
    }

    const renderOption = () =>{

        switch (name) {
            case 'year':
                return Other.LIST_YEAR.map(item =>{
                    return (
                        <option 
                            key = {item} 
                            value = {item}
                        >Năm {item}</option>
                    )
                });
            case 'month':
                const lstMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                return lstMonth.map(item =>{
                    return (
                        <option 
                            key = {item} 
                            value = {item}
                        >Tháng {item}</option>
                    )
                });
            case 'date':
                let flag = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
                let amountDate = 30;

                if(month ==='1' || month === '3' || month === '5' || month === '7' 
                 || month === '8' || month === '10' || month === '12'){
                    amountDate = 31;
                }else if(month === '2'){
                    amountDate = flag ? 29 : 28;
                }

                const lstDate = new Array(amountDate).fill(0);
                return lstDate.map((item, index) =>{
                    return (
                        <option 
                            key = {index + 100} 
                            value = {index + 1}
                        >Ngày {index + 1}</option>
                    )
                });
        
            default:
                return null;
        } 
    }

    return (
        <select 
            value = {value}
            onChange={onHandleChange}
            name = {name}
        >
            {renderOption()}
        </select>
    );
}

export default SelectDate;