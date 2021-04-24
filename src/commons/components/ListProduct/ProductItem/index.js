import React from 'react'
import './style.scss'
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom'

ProductItem.propTypes = {
    isExistCart: PropTypes.bool, 
    avatar: PropTypes.string,
    alias: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    promo: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.string,
};

ProductItem.defaultProps = {
    
}

function ProductItem(props) {

    const onHandleAddCart = () =>{
    }

    const {
        isExistCart, 
        avatar,
        alias,
        title,
        rating,
        promo,
        price
    } = props
    
    return (
        <div className="product-item">
            <div className="product-item__thumb">
                <button 
                    className = "quickview-btn"
                    // onClick = {() => this.onOpenQuickView(productContent)}
                ><span class="icon icon-eye"></span></button>
                <div>
                    <img src= {avatar} alt="product" />
                </div>
                {
                    !isExistCart ?
                    (
                        <button 
                            className="add-to-cart"
                            onClick = {onHandleAddCart}
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
                <h4 className="product-title"><NavLink to={`/product-detail/${alias}`} >{title}</NavLink></h4>
                <div className="product-rate">
                    <div className="product-rate--overlay" style={{width: 100 - rating + "%"}} />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                </div>
                <p className="product-price">
                    {
                        promo ? 
                        <del> <span class="price-symboy">$</span>{promo}</del> : 
                        ""
                    }
                    
                    <span> <span className="price-symboy">$</span>{price}</span> 
                </p>
            </div>
        </div>
    )
}

export default ProductItem
