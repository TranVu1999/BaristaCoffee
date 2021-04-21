import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import FormAddCart from '../../Layout/FormAddCart';
import {NavLink} from 'react-router-dom'

ProductSummary.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    promo: PropTypes.number,
    shortDescription: PropTypes.string,
    sku: PropTypes.string,
    productCategory: PropTypes.string,
    numComment: PropTypes.number,
};

ProductSummary.defaultProps = {
    title: "",
    rating: 0,
    price: 0,
    promo: 0,
    shortDescription: "",
    sku: "",
    productCategory: "",
    numComment: 0
}

function ProductSummary(props) {
    const {
        title, 
        rating,
        price, 
        promo,
        shortDescription,
        sku,
        productCategory,
        numComment
    } = props

    return (
        <div className="product-summary">
            <h3 className="product-title">{title}</h3>
            <div className="product-rate__box">
                <div className="product-rate">
                    <div 
                        className="product-rate--overlay" 
                        style={{width: 100 - rating+ '%'}} 
                    />

                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                </div>

                <p className="product-rate--text">({numComment} customer reviews)</p>
            </div>

            <p className="product-price">
                {   promo
                    ? (
                        <del> 
                            <span className="price-symboy">$</span>
                            {promo}
                        </del>
                    )
                    : ""
                }
                
                <span> <span className="price-symboy">$</span>{price}</span> 
            </p>

            <p className="product__short-desc">{shortDescription}</p>

            <FormAddCart/>

            <div className="product-meta">
                <div className="product-meta__item">
                    <label>Sku</label>
                    <span>{sku}</span>
                </div>

                <div className="product-meta__item">
                    <label>Category</label>
                    <span>Coffee</span>
                </div>

                <div className="product-meta__item">
                    <label>Tag</label>
                    <span>{productCategory}</span>
                </div>
            </div>

            <div className="product-meta">
                <div className="product-meta__item">
                    <label>Share</label>
                    <ul className="lst-share-icon">
                        <li><a href="/#"><span aria-hidden="true" className="social_facebook"></span></a></li>
                        <li><a href="/#"><span aria-hidden="true" className="social_twitter" /></a></li>
                        <li><a href="/#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                        <li><a href="/#"><span aria-hidden="true" className="social_tumblr" /></a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ProductSummary;