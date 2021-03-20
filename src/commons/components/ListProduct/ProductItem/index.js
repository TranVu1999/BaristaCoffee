import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class ProductItem extends Component {
    onHandleAddCart = () =>{
        const {productContent} = this.props;
        this.props.onHandleAddCart(productContent);
    }
    render() {
        const {productContent, isExistCart} = this.props;
        console.log("product content", productContent)

        return (
            <div className="product-item">
                <div className="product-item__thumb">
                    <NavLink to={`/product-detail/${productContent.productAlias}`} >
                        <img src= {productContent.productAvatar} alt="product" />
                    </NavLink>
                    {
                        !isExistCart ?
                        (
                            <button 
                                className="add-to-cart"
                                onClick = {this.onHandleAddCart}
                            ><span className="icon icon-libreoffice" /> Add To Cart</button>
                        ) :
                        (
                            <NavLink to = "view-cart" 
                                className="view-cart"
                            ><span className="icon_check"></span> View Cart</NavLink>
                        )
                    }
                    
                </div>
                

                <div className="product-item__text">
                    <h4 className="product-title"><NavLink to={`/product-detail/${productContent.productAlias}`} >{productContent.productTitle}</NavLink></h4>
                    <div className="product-rate">
                        <div className="product-rate--overlay" style={{width: 100 - productContent.rating + "%"}} />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                    </div>
                    <p className="product-price">
                        {
                            productContent.productPromo ? 
                            <del> <span class="price-symboy">$</span>{productContent.productPromo}</del> : 
                            ""
                        }
                        
                        <span> <span className="price-symboy">$</span>{productContent.productPrice}</span> 
                    </p>
                </div>
            </div>
        )
    }
}
