import React, { Component } from 'react';
import './style.scss';

export default class CartList extends Component {
    render() {
        return (
            <div className="cart-item">
                <div className="product-thumbnail">
                    <button>
                    <span aria-hidden="true" className="icon_close" />
                    </button>
                </div>
                <div className="product-name">
                    <div className="product-image">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-2-500x500.jpg" alt="product" />
                    </div>
                    <div className="product-text">Paper Bag</div>
                </div>
                <div className="product-price">$79.00</div>
                <div className="product-quanity">
                    <form className="d-flex-between product-add-cart">
                    <div className="form-group--amount">
                        <button className="btn-increase"><span aria-hidden="true" className="icon_minus-06" /></button>
                        <input type="text" defaultValue={1} />
                        <button className="btn-decrease"><span aria-hidden="true" className="icon_plus" /></button>
                    </div>
                    </form>
                </div>
                <div className="product-total">$7900.00</div>
            </div>
        )
    }
}
