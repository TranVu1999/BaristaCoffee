import React from 'react';
import './style.scss'

import HeaderCartItem from '../../../commons/components/HeaderCartItem';

function HeaderCart(props) {
    const listProduct = []

    const renderCartData = () =>{
        if(listProduct.length > 0){
            return listProduct.map((item, index) =>{
                return <HeaderCartItem
                    avatar = {item.avatar}
                />
            })
        }

        return <div className="cart-notify">No products in the cart</div>;
    }

    return (
        <div className="toggle-box cart--header">
            {renderCartData()}
        </div>
    );
}

export default HeaderCart;