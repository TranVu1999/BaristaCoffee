import React from 'react';
import './style.scss'
import {useSelector, useDispatch} from 'react-redux'
import {
    actCloseCart, 
    actRemoveCart,
    actUpdateCart
} from './../../../commons/modules/Cart/action'
import CartItem from '../../../commons/components/CartItem';
import * as Helpers from './../../../commons/js/helpers'

function Cart(props) {
    const cartInfo = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    const onHandleCloseCart = () =>{
        dispatch(actCloseCart())
    }

    const onHandleRemoveCart = productId =>{
        dispatch(actRemoveCart(productId))
    }

    const onHandleUpdateCartItem = (productId, number) =>{
        dispatch(actUpdateCart({
            productId, number
        }))
    }

    const onRenderCart = () =>{
        if(cartInfo.data.length > 0){
            return cartInfo.data.map((item, index) => {
                return <CartItem
                    key = {index}
                    id = {item.id}
                    avatar = {item.avatar}
                    title = {item.title}
                    price = {item.price}
                    promo = {item.promo}
                    amount = {item.amount}
                    alias = {item.alias}

                    onRemoveCart = {onHandleRemoveCart}
                    onUpdateCartItem = {onHandleUpdateCartItem}
                />
              });
        }
    }

    const renderTotalCart = () =>{
        let sum = 0

        for(let cartItem of cartInfo.data){
            sum += cartItem.amount * cartItem.price
        }

        return sum
    }

    return (
        <div className={cartInfo.isOpen ? "cart open" : "cart"}>
        <div className="cart-container">
          <div className="cart--title">
            <h2>You are purchasing</h2>
            <button onClick={onHandleCloseCart}>
              <span aria-hidden="true" className="icon_close"></span>
            </button>
          </div>
          <div className="cart--body">{onRenderCart()}</div>

          <div className="cart--footer">
            <div className="d-flex-between sub-total">
              <span>Subtotal</span>
              <b>${Helpers.standardPrice(renderTotalCart())}</b>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <a href="/#" className="barista-btn btn-viewcart">
              View Cart
            </a>
            <a href="/#" className="barista-btn btn-checkout">
              Check out
            </a>
          </div>
        </div>
      </div>
    );
}

export default Cart;