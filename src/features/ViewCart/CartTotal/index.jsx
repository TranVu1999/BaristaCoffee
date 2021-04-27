import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import {standardPrice} from './../../../commons/js/helpers'

CartTotal.propTypes = {
    listProduct: PropTypes.array,
};

CartTotal.defaultProps = {
    listProduct: []
}

function CartTotal(props) {
    const {listProduct} = props

    const renderTotal = () =>{
        let total = 0

        for(let productItem of listProduct){
            let sale = 0
            for(let saleItem of productItem.listSale){
                if(saleItem.from > productItem.amount){
                    break
                }
                sale = saleItem.price
            }

            let originTotal = productItem.amount * productItem.price
            total += originTotal - (originTotal * sale) / 100
        }

        return total
    }

    const renderSubTotal = () =>{
        let subTotal = 0;
        for(let productItem of listProduct){
            subTotal += productItem.amount * productItem.price
        }

        return subTotal
    }

    return (
        <div className="cart__total">
            <h3>Cart Total</h3>
            <div className="cart__total--content d-flex-between">
                <div className="cart__total--box d-flex-between">
                    <h4>Subtotal: </h4>
                    <span>${standardPrice(renderSubTotal())}</span>
                </div>

                <div className="cart__total--box d-flex-between">
                    <h4>Shipping: </h4>
                    <span>Free Shipping</span>
                </div>

                <div className="cart__total--box d-flex-between">
                    <h4>Total: </h4>
                    <span>${standardPrice(renderTotal())}</span>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;