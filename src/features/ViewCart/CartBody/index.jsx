import React from 'react';
import './style.scss'
import PropTypes from 'prop-types';
import CartItem from './../../../commons/components/CartItem'
import {useDispatch} from 'react-redux'
import {actUpdateCart} from './../../../commons/modules/Cart/action'

CartBody.propTypes = {
    listProduct: PropTypes.array,
};

CartBody.defaultProps = {
    listProduct: []
}

function CartBody(props) {
    const {listProduct} = props
    const dispatch = useDispatch()

    const onHanldeUpdateCart = (id, number) =>{
        dispatch(actUpdateCart({
            productId: id,
            number
        }))
    }

    const renderCart = () =>{
        if(listProduct.length > 0){
            return listProduct.map((item, index) =>{
                return <CartItem 
                    key = {index}
                    id = {item.id}
                    avatar = {item.avatar}
                    title = {item.title}
                    amount = {item.amount}
                    price = {item.price}

                    onUpdateCart = {onHanldeUpdateCart}
                />
            })
        }

        return null
    }
    
    return (
        <div className="cart__content">
            <div className="cart--header">
                <div className="cart-item">
                <div className="product-thumbnail">
                    <h3>Cart</h3>
                </div>
                <div className="product-name">Product</div>
                <div className="product-price">Price</div>
                <div className="product-quanity">Quanity</div>
                <div className="product-total">Total</div>
                </div>
            </div>
            <div className="cart--body">
                {renderCart()}
            </div>
        </div>
    );
}

export default CartBody;