import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './style.scss';

export default class ListProduct extends Component {

    renderListProduct = () =>{
        const {lstProduct} = this.props;
        if(lstProduct){
            return lstProduct.map((item, index) =>{
                return <ProductItem key = {index} productContent = {item}/>
            })
        }
        return null;
        
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
