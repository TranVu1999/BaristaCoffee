import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class AccountListProduct extends Component {
    render() {
        return (
            <ul className = "lst-product lst-prod-favorite">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </ul>
        )
    }
}
