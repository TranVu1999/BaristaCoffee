import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

UpdateCart.propTypes = {
    value: PropTypes.number,
    onUpdate: PropTypes.func,
};

UpdateCart.defaultProps = {
    value: 0,
    onUpdate: null
}

function UpdateCart(props) {
    const {value} = props

    const onHanldeUpdate = (number) =>{
        if(value === 1 && number === -1) return
        
        if(props.onUpdate){
            props.onUpdate(number)
        }
    }

    const onHandleSubmit = event =>{
        event.preventDefault()
    }

    return (
        <form 
            className="d-flex-between product-add-cart"
            onSubmit = {onHandleSubmit}
        >
            <div className="form-group--amount">
                <button 
                    className="btn-increase"
                    onClick = {() => onHanldeUpdate(-1)}
                ><span aria-hidden="true" className="icon_minus-06" /></button>
                    <input type="text" value={value} />
                <button 
                    className="btn-decrease"
                    onClick = {() => onHanldeUpdate(1)}
                ><span aria-hidden="true" className="icon_plus" /></button>
            </div>
        </form>
    );
}

export default UpdateCart;