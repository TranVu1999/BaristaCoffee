import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class ProductItem extends Component {
    render() {
        const {productContent} = this.props;
        console.log("product detail", productContent);

        return (
            <div className="product-item">
                <NavLink to={`product-detail/${productContent.productAlias}`} className="product-item__thumb">
                    <img src= {productContent.productAvatar} alt="product" />
                    <button className="add-to-cart"><span className="icon icon-libreoffice" /> Add To Cart</button>
                </NavLink>

                <div className="product-item__text">
                    <h4 className="product-title"><NavLink to={`product-detail/${productContent.productAlias}`} >{productContent.productTitle}</NavLink></h4>
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
                            productContent.productPromo !== '0' ? 
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
