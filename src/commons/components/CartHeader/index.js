import React, { Component } from 'react';
import './style.scss';

export default class CartHeader extends Component {
    render() {
        return (
            <div className="toggle-box cart--header">
                <div className="cart__item">
                    <div className="item--thumbnail">
                    <a href="/#">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-7-1-500x500.jpg" alt = "product" />
                    </a>
                    </div>
                    <div className="item--text">
                        <a href="/#">Choco Bites</a>
                        <span>Quanity: 1</span>
                        <p>$63.00</p>
                    </div>
                    <button className="item--control">
                        <span aria-hidden="true" className="icon_close" />
                    </button>
                </div>
                <div className="cart__item">
                    <div className="item--thumbnail">
                    <a href="/#">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-7-1-500x500.jpg" alt = "product" />
                    </a>
                    </div>
                    <div className="item--text">
                    <a href="/#">Choco Bites</a>
                    <span>Quanity: 1</span>
                    <p>$63.00</p>
                    </div>
                    <button className="item--control">
                    <span aria-hidden="true" className="icon_close" />
                    </button>
                </div>
                <div className="cart__item">
                    <div className="item--thumbnail">
                    <a href="/#">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-7-1-500x500.jpg" alt = "product" />
                    </a>
                    </div>
                    <div className="item--text">
                    <a href="/#">Choco Bites</a>
                    <span>Quanity: 1</span>
                    <p>$63.00</p>
                    </div>
                    <button className="item--control">
                    <span aria-hidden="true" className="icon_close" />
                    </button>
                </div>
                <div className="d-flex-between cart__control">
                    <a href="/#" className="barista-btn">View Cart</a>
                    <a href="/#" className="barista-btn">Check Out</a>
                </div>
            </div>

        )
    }
}
