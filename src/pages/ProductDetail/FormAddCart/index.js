import React, { Component } from 'react';
import './style.scss';

export default class FormAddCart extends Component {
    render() {
        return (
            <form className="d-flex-between product-add-cart">
                <div className="form-group--amount">
                <button className="btn-increase"><span aria-hidden="true" className="icon_minus-06" /></button>
                <input type="text" defaultValue={1} />
                <button className="btn-decrease"><span aria-hidden="true" className="icon_plus" /></button>
                </div>
                <div className="form-group">
                <button className="coffee-btn">Add To Cart</button>
                </div>
            </form>
        )
    }
}
