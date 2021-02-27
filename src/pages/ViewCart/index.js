import React, { Component } from 'react';
import './style.scss';
import MainPage from './../../commons/components/MainPage';
import Breadcrumb from './../../commons/components/Breadcrumb';
import CartList from './CartList';
import CartTotal from './CartTotal';
import CartCalculate from './CartCalculate';
import {connect} from 'react-redux';
import AccordingToggle from '../../commons/components/AccordingToggle';
import { NavLink } from 'react-router-dom';

class ViewCartPage extends Component {
    render() {
        const {dataCart} = this.props;

        return (
            <MainPage>
                <Breadcrumb mainTitle = "View Cart"/>

                <div className="cart-page">
                {
                    dataCart.length > 0 ?
                    (
                        <div className="cf-container">
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
                                    <CartList/>
                                </div>
                            </div>

                            <CartTotal/>
                            <CartCalculate/>
                            
                        </div>
                        
                    ) :
                    (
                        <div className = "cf-container">
                            <AccordingToggle/>
                            <NavLink 
                                to = "/shop" 
                                class="return-to-shop"
                            >Return to shop</NavLink>
                        </div>
                    )
                }
                </div>
                

            </MainPage>
        )
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data
    }
}

export default connect(mapStateToProps)(ViewCartPage);
