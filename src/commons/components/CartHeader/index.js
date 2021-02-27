import React, { Component } from 'react';
import './style.scss';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import {NavLink} from 'react-router-dom';

class CartHeader extends Component {

    renderCartData = () =>{
        const {dataCart} = this.props;

        if(dataCart.length > 0){
            return (
                <>
                    {
                        dataCart.map((item, index) => {
                            return (
                                <CartItem key = {index} prodContent = {item}/>
                            )
                        })
                    }
                    

                    <div className="d-flex-between cart__control">
                        <NavLink to="/view-cart" className="barista-btn">View Cart</NavLink>
                        <a href="/#" className="barista-btn">Check Out</a>
                    </div>
                </>
                
            )
        }

        return (
            <div className="cart-notify">
                No products in the cart
            </div>
        )
    }

    render() {
        return (
            <div className="toggle-box cart--header">
                
                {this.renderCartData()}
                
            </div>

        )
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data
    }
}

export default connect(mapStateToProps)(CartHeader);
