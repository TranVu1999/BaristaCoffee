import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import UpdateCart from '../UpdateCart/index ';
import  {standardPrice} from './../../js/helpers'
import './style.scss'

CartItem.propTypes = {
    id: PropTypes.string,
    alias: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
    listSale: PropTypes.array,

    onUpdateCart: PropTypes.func,
    onRemoveCart: PropTypes.func,
};

CartItem.defaultProps = {
    id: "",
    alias: "",
    avatar: "",
    title: "",
    price: 0,
    amount: 0,
    listSale: [],

    onUpdateCart: null,
    onRemoveCart: null
}

function CartItem(props) {
    const {
        id,
        alias,
        avatar,
        title,
        price,
        amount,
        listSale
    } = props

    const onHanldeRemove = () =>{
        if(props.onRemoveCart){
            props.onRemoveCart(id)
        }
    }
    
    const onHanldeUpdate = (number) =>{  
        if(props.onUpdateCart){
            props.onUpdateCart(id, number)
        }
    }

    const renderPrice = () =>{
        const originTotal = amount * price
        let sale = 0;
        for(let saleItem of listSale){
            if(saleItem.from > amount){
                break
            }

            sale = saleItem.price
        }


        return (
            <div className="product-total">
                {sale ? (<del>${standardPrice(originTotal)}</del>) : ""}
                
                ${standardPrice(originTotal - (originTotal * sale) / 100)}
            </div>
        )
    }

    return (
        <div className="cart-item">
            <div className="product-thumbnail">
                <button onClick = {onHanldeRemove} >
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
            <div className="product-price">
                ${standardPrice(price)}
            </div>

            <div className="product-quanity">
                <UpdateCart 
                    value = {amount}
                    onUpdate = {onHanldeUpdate}
                />
            </div>

            {renderPrice()}
        </div>
    );
}

export default CartItem;