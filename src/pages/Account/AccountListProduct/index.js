import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class AccountListProduct extends Component {
    showTitleList = () =>{
        const {title} = this.props;
        switch(title){
            default:
                return "Sản phẩm đã xem (1)";
        }
    }
    
    render() {

        return (
            <div className = "account-content--box">
                <span class="account__title">{this.showTitleList()}</span>
                <div class="account__content">
                    <ul className = "lst-product lst-prod-favorite">
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                    </ul>
                </div>
                
            </div>
            
        )
    }
}
