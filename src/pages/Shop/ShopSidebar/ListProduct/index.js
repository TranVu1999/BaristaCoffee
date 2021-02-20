import React, { Component } from 'react'
import './style.scss';
import ProductItem from './ProductItem';

export default class ListProduct extends Component {
    render() {
        return (
            <div className="lst-prod">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        )
    }
}
