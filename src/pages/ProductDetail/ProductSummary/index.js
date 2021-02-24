import React, { Component } from 'react';
import FormAddCart from '../FormAddCart';
import './style.scss';

import {NavLink} from 'react-router-dom';

export default class ProductSummary extends Component {

    standardizedString = (str) =>{
        return str ? str.replace(/ /g, '-').toLowerCase() :"";
        
    }

    renderProductInfo = () =>{
        const {productInfo} = this.props;

        if(productInfo){
            return (
                <>
                    <h3 className="product-title">{productInfo.productTitle}</h3>
                    <div className="product-rate__box">
                        <div className="product-rate">
                            <div 
                                className="product-rate--overlay" 
                                style={{width: 100 - productInfo.productRating + '%'}} 
                            />

                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>

                            <p className="product-rate--text">
                                (2 customer reviews)
                            </p>
                        </div>
                    <p className="product-price">
                        {   productInfo.productPromo 
                            ? (
                                <del> <span className="price-symboy">$</span>{productInfo.productPromo}</del>
                            )
                            : ""
                        }
                        
                        <span> <span className="price-symboy">$</span>{productInfo.productPrice}</span> 
                    </p>
                    <p className="product__short-desc">{productInfo.productShortDesc}</p>

                    <FormAddCart/>

                    <div className="product-meta">
                        <div className="product-meta__item">
                            <label>Sku</label>
                            <span>{productInfo.productSKU}</span>
                        </div>

                        <div className="product-meta__item">
                            <label>Category</label>
                            <span>Coffee</span>
                        </div>

                        <div className="product-meta__item">
                            <label>Tag</label>
                            <span>
                                <NavLink 
                                    to = {"/product-category/" + this.standardizedString(productInfo.prodCateTitle)}
                                >{productInfo.prodCateTitle}</NavLink>
                            </span>
                        </div>
                    </div>

                    <div className="product-meta">
                        <div className="product-meta__item">
                        <label>Share</label>
                        <ul className="lst-share-icon">
                            <li>
                                <a href="/#"><span aria-hidden="true" className="social_facebook"></span></a>
                            </li>
                            <li><a href="/#"><span aria-hidden="true" className="social_twitter" /></a></li>
                            <li><a href="/#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                            <li><a href="/#"><span aria-hidden="true" className="social_tumblr" /></a></li>
                        </ul>
                        </div>
                    </div>
                </>
            )
        }
    }

    render() {
        
        return (
            
            <div className="product-summary">
                {this.renderProductInfo()}
            </div>
        )
    }
}
