import React, { Component } from 'react';
import './style.scss';

export default class Cart extends Component {

    render() {
        return (
            <div className="cart open">
                <div className="cart-container">
                    <div className = "cart--title">
                        <h2>You are purchasing</h2>
                        <button><span aria-hidden="true" className="icon_close"></span></button>
                    </div>
                    <div className = "cart--body">
                        <div className = "cart--item">
                            <div className = "product-thumb">
                                <img src ="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod6_epuaqx.jpg" alt="product"/>
                            </div>
                            <div className = "product-text">
                                <button className = "btn-close"><span aria-hidden="true" className="icon_close"></span></button>
                                <h4>Coffee Pot</h4>
                                <p className = "product-price">$29.00</p>
                                <div className = "update-cart">
                                    <button className="btn-increase">
                                        <span aria-hidden="true" className="icon_minus-06" />
                                    </button>
                                    <input type="text" defaultValue="1"/>
                                    <button className="btn-decrease"><span aria-hidden="true" className="icon_plus"/></button>
                                </div>
                            </div>
                        </div>
                        <div className = "cart--item">
                            <div className = "product-thumb">
                                <img src ="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod6_epuaqx.jpg" alt="product"/>
                            </div>
                            <div className = "product-text">
                                <button className = "btn-close"><span aria-hidden="true" className="icon_close"></span></button>
                                <h4>Coffee Pot</h4>
                                <p className = "product-price">$29.00</p>
                                <div className = "update-cart">
                                    <button className="btn-increase">
                                        <span aria-hidden="true" className="icon_minus-06" />
                                    </button>
                                    <input type="text" defaultValue="1"/>
                                    <button className="btn-decrease"><span aria-hidden="true" className="icon_plus"/></button>
                                </div>
                            </div>
                        </div>
                        <div className = "cart--item">
                            <div className = "product-thumb">
                                <img src ="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod6_epuaqx.jpg" alt="product"/>
                            </div>
                            <div className = "product-text">
                                <button className = "btn-close"><span aria-hidden="true" className="icon_close"></span></button>
                                <h4>Coffee Pot</h4>
                                <p className = "product-price">
                                    <del><span class="price-symboy">$</span>25.00</del>
                                    $29.00
                                </p>
                                <div className = "update-cart">
                                    <button className="btn-increase">
                                        <span aria-hidden="true" className="icon_minus-06" />
                                    </button>
                                    <input type="text" defaultValue="5"/>
                                    <button className="btn-decrease"><span aria-hidden="true" className="icon_plus"/></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "cart--footer">
                        <div className = "d-flex-between sub-total">
                            <span>Subtotal</span>
                            <b>$50.00</b>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <a href="/#" className = "barista-btn btn-viewcart">View Cart</a>
                        <a href="/#" className = "barista-btn btn-checkout">Check out</a>
                    </div>
                </div>
            </div>
        )
    }
}
