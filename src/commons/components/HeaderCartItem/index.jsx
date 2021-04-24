import React from 'react';
import PropTypes from 'prop-types';

HeaderCartItem.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.number,
    promo: PropTypes.number,

    onRemoveItem: PropTypes.func,
};

function HeaderCartItem(props) {

    const {
        id,
        avatar,
        title,
        amount,
        price,
        promo
    } = props

    const onHandleRemoveItem = () =>{
        if(props.onRemoveItem){
            props.onRemoveItem(id)
        }
    }

    return (
        <div className="cart__item">
            <div className="item--thumbnail">
            <a href="/#">
                <img src={avatar} alt="product" />
            </a>
            </div>
            <div className="item--text">
            <a href="/#">{title}</a>
            <span>Quanity: {amount}</span>
            <p>${price}</p>
            </div>
            <button className="item--control" onClick={onHandleRemoveItem}>
            <span aria-hidden="true" className="icon_close" />
            </button>
        </div>
    );
}

export default HeaderCartItem;