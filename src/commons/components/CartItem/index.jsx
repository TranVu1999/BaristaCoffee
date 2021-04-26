import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import UpdateCart from '../UpdateCart/index ';
import  {standardPrice} from './../../js/helpers'

CartItem.propTypes = {
    id: PropTypes.string,
    alias: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,

    onUpdateCart: PropTypes.func,
};

CartItem.defaultProps = {
    id: "",
    alias: "",
    avatar: "",
    title: "",
    price: 0,
    amount: 0,

    onUpdateCart: null
}

function CartItem(props) {
    const {
        id,
        alias,
        avatar,
        title,
        price,
        amount
    } = props

    const onHanldeRemove = () =>{

    }
    
    const onHanldeUpdate = (number) =>{        

        if(props.onUpdateCart){
            props.onUpdateCart(id, number)
        }
    }

    return (
        <div className="cart-item">
            <div className="product-thumbnail">
                <button onClick = {onHanldeRemove()} >
                    <span aria-hidden="true" className="icon_close" />
                </button>
            </div>

            <div className="product-name">
                <div className="product-image">
                    <NavLink to = {`/product-detail/${alias}`}>
                        <img src={avatar} alt="product" />
                    </NavLink>
                    
                </div>
                <div className="product-text">
                    <NavLink to = {`/product-detail/${alias}`}>{title}</NavLink>
                </div>
            </div>
            <div className="product-price">${standardPrice(price)}</div>

            <div className="product-quanity">
                <UpdateCart 
                    value = {amount}
                    onUpdate = {onHanldeUpdate}
                />
            </div>

            <div className="product-total">${standardPrice(amount * price)}</div>
        </div>
    );
}

export default CartItem;