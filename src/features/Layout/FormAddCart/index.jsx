import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

FormAddCart.propTypes = {
    
};

function FormAddCart(props) {
    const [number, setNumber] = useState(1)

    const handleUpdateNumber = (unit) =>{
        if(number === 1 && unit === -1) return

        setNumber(number + unit)
    }

    const onHandleSubmit = (event) =>{
        event.preventDefault();
        
    }

    const onHandleAddCart = () =>{
        console.log({number})
    }

    return (
        <form 
            className="d-flex-between product-add-cart"
            onSubmit = {onHandleSubmit}
        >
            <div className="form-group--amount">
                <button 
                    className="btn-increase"
                    onClick = {() => handleUpdateNumber(-1)}
                ><span aria-hidden="true" className="icon_minus-06" /></button>
                <input type="text" value = {number}/>
                <button 
                    className="btn-decrease"
                    onClick = {() => handleUpdateNumber(1)}
                ><span aria-hidden="true" className="icon_plus" /></button>
            </div>
            <div className="form-group">
                <button 
                    className="coffee-btn"
                    onClick = {onHandleAddCart}
                >Add To Cart</button>
            </div>
        </form>
    );
}

export default FormAddCart;