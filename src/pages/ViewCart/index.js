import React, { Component } from 'react';
import './style.scss';
import MainPage from './../../commons/components/MainPage';
import Breadcrumb from './../../commons/components/Breadcrumb';
import CartList from './CartList';
import CartTotal from './CartTotal';
import CartCalculate from './CartCalculate';

export default class ViewCartPage extends Component {
    render() {
        return (
            <MainPage>
                <Breadcrumb mainTitle = "View Cart"/>

                <div className="cart-page">
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
                </div>

            </MainPage>
        )
    }
}
