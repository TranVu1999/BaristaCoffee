import React from 'react';
import './style.scss'
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'

import {NavLink} from 'react-router-dom'
import HeaderCartItem from '../../../commons/components/HeaderCartItem';
import {actRemoveCart} from './../../../commons/modules/Cart/action'


HeaderCart.propTypes = {
    listProduct: PropTypes.array,
};

HeaderCart.defaultProps = {
    listProduct: []
}

function HeaderCart(props) {
    const dispatch = useDispatch()

    const onHanldeRemoveItem = (productId) =>{
        dispatch(actRemoveCart(productId))
    }

    const renderCartData = () =>{
        const {listProduct} = props

        if(listProduct.length > 0){
            return (
                <>  
                    <div className="list-product">
                        {listProduct.map((item, index) =>{
                            return <HeaderCartItem
                                key = {index}
                                id = {item.id}
                                alias = {item.alias}
                                avatar = {item.avatar}
                                title = {item.title}
                                amount = {item.amount}
                                price = {item.price}
                                promo = {item.promo}

                                onRemoveItem = {onHanldeRemoveItem}
                            />
                        }) }
                    </div>
                    
                    <div className="d-flex-between cart__control">
                        <NavLink to="/view-cart" className="barista-btn">View Cart</NavLink>
                        <NavLink to="checkout" className="barista-btn"> Check Out</NavLink>
                    </div>
                </>
            )
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