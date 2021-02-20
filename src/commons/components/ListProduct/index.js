import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './style.scss';

export default class ListProduct extends Component {

    renderListProduct = () =>{
        const {listProduct} = this.props;
        return listProduct.map((item, index) =>{
            return <ProductItem key = {index} productContent = {item}/>
        })
    }

    render() {
        const {rowShow} = this.props;
        return (
            <div 
                className= {
                    rowShow 
                    ?`d-gr-${rowShow} lst-product__container`
                    : "d-gr-4 lst-product__container"
                }
            > 
                {this.renderListProduct()}
            </div>
        )
    }
}
