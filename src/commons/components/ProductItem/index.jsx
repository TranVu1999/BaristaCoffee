import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import './style.scss'

import {useDispatch} from 'react-redux'
import {actAddCart} from './../../modules/Cart/action'

ProductItem.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    alias: PropTypes.string,
    rating: PropTypes.number,
    isExistCart: PropTypes.bool,
    promo: PropTypes.number,
    price: PropTypes.number,
};

ProductItem.defaultProps = {
    avatar: "",
    title: "",
    alias: "",
    rating: 80,
    isExistCart: false,
    promo: 0,
    price: 0
}

function ProductItem(props) {
    const dispatch = useDispatch()

    const onHandleAddCart = () =>{
        const data = {
            avatar: props.avatar,
            alias: props.alias,
            promo: props.promo,
            price: props.price,
            title: props.title,
            id: props.id
        }

        dispatch(actAddCart(data))
    }

    const {
        avatar,
        isExistCart,
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
                ><span className="icon icon-eye"></span></button>
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
                        <del> <span className="price-symboy">$</span>{promo}</del> : 
                        ""
                    }
                    
                    <span> <span className="price-symboy">$</span>{price}</span> 
                </p>
            </div>
        </div>
    );
}

export default ProductItem;