import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import './style.scss'

ProductItem.propTypes = {
    alias: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    promo: PropTypes.string,
    price: PropTypes.string,
};

ProductItem.defaultProps = {
    alias: "",
    avatar: "",
    title: "",
    rating: 0,
    promo: 0,
    price: 0,
}

function ProductItem(props) {

    const {
        alias, 
        avatar,
        title,
        rating,
        promo,
        price
    } = props

    return (
        <div className="prod-item">
            <NavLink to={`/product-detail/${alias}`} className="prod-thumb">
                <img src={avatar} alt="prod thumb" />
            </NavLink>
            <div className="prod-text">
                <span className="prod-title">
                    <NavLink to={`/product-detail/${alias}`}>{title}</NavLink> 
                </span>
                <div className="product-rate">
                    <div 
                        className="product-rate--overlay" 
                        style={{width: 100 - rating + '%'}} 
                    />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                </div>
                <p className="product-price">
                    {
                        promo ? (
                            <del> 
                                <span className="price-symboy">$</span>{promo}
                            </del>
                        ): ""
                    }
                    
                    <span> <span className="price-symboy">$</span>{price}</span> 
                </p>
            </div>
        </div>
    );
}

export default ProductItem;