import React, { Component } from 'react'
import './style.scss';
import ProductItem from './ProductItem';

export default class ListProduct extends Component {
    renderProductItem = () =>{
        const {lstProduct} = this.props;

        return lstProduct.map((item, index) => {
            return <ProductItem key = {index} productContent = {item}/>
        })
    }
    render() {
        this.renderProductItem();
        return (
            <div className="lst-prod">
                {this.renderProductItem()}
            </div>
        )
    }
}
