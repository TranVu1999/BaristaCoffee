import React from 'react';
import PropTypes from 'prop-types';
import * as Helpers from './../../js/helpers'

CartSlideItem.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    promo: PropTypes.number,
    price: PropTypes.number,
    amount: PropTypes.number,
    alias: PropTypes.string,

    onRemoveCart: PropTypes.func,
    onUpdateCartItem: PropTypes.func,
};

CartSlideItem.defaultProps = {
    id: "",
    avatar: "",
    title: "",
    promo: 0,
    price: 0,
    amount: 0,
    alias: "",

    onRemoveCart: null,
    onUpdateCartItem: null
}

function CartSlideItem(props) {

    const {
        id,
        avatar,
        title,
        promo,
        price,
        amount,
        alias
    } = props

    const onHanldeRemoveCart = () =>{
        if(props.onRemoveCart){
            props.onRemoveCart(id)
        }
    }

    const onHandleUpdateCartItem = number =>{
        if(amount === 1 && number === -1){ return }

        if(props.onUpdateCartItem){
            props.onUpdateCartItem(id, number)
        }
    }

    return (
        <div className="cart--item">
            <div className="product-thumb">
                <img src={avatar} alt="product" />
            </div>
            <div className="product-text">
                <button
                className="btn-close"
                onClick={onHanldeRemoveCart}
                >
                <span aria-hidden="true" className="icon_close"></span>
                </button>
                <h4>{title}</h4>
                <p className="product-price">
                {promo ? (
                    <del>
                    <span class="price-symboy">$</span>
                    {promo}
                    </del>
                ) : (
                    ""
                )}
                ${Helpers.standardPrice(price) }
                </p>
                <div className="update-cart">
                <button
                    className="btn-increase"
                    onClick={() => onHandleUpdateCartItem(-1)}
                >
                    <span aria-hidden="true" className="icon_minus-06" />
                </button>
                <input type="text" value={amount} />
                <button
                    className="btn-decrease"
                    onClick={() => onHandleUpdateCartItem(1)}
                >
                    <span aria-hidden="true" className="icon_plus" />
                </button>
                </div>
            </div>
        </div>
    );
}

export default CartSlideItem;