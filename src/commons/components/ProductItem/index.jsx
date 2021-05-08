import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import './style.scss'

import {useDispatch} from 'react-redux'
import {actAddCart} from './../../modules/Cart/action'
import {actOpenQuickView} from './../../modules/QuickView/action'
import {actOpenCompare} from './../../modules/Compare/action'

ProductItem.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    alias: PropTypes.string,
    rating: PropTypes.number,
    isExistCart: PropTypes.bool,
    promo: PropTypes.number,
    price: PropTypes.number,
    listSale: PropTypes.array,
    shortDescription: PropTypes.string,
    moreImage: PropTypes.array,
    isCompare: PropTypes.bool,
    width: PropTypes.number,
    length: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
};

ProductItem.defaultProps = {
    avatar: "",
    title: "",
    alias: "",
    rating: 80,
    isExistCart: false,
    promo: 0,
    price: 0,
    listSale: [],
    shortDescription: "",
    moreImage: [],
    isCompare: false,
    weight: 0,
    width: 0,
    length: 0,
    height: 0

}

function ProductItem(props) {
    const {
        id,
        avatar,
        isExistCart,
        alias,
        title,
        rating,
        promo, 
        price,
        listSale,
        shortDescription,
        moreImage,
        isCompare,
        weight,
        width,
        length,
        height
    } = props
    
    const dispatch = useDispatch()

    const onHandleAddCart = () =>{
        const data = {
            avatar,
            alias,
            promo,
            price,
            title,
            id,
            listSale
        }

        dispatch(actAddCart(data))
    }

    const onOpenQuickView = () =>{
        const data = {
            title,
            rating,
            alias,
            price,
            promo,
            avatar,
            shortDescription,
            moreImage
        }
        dispatch(actOpenQuickView(data))
    }

    const onOpenCompare = () =>{
        const data = {
            title,
            rating,
            alias,
            price,
            promo,
            avatar,
            weight,
            width,
            length,
            height
        }

        dispatch(actOpenCompare(data))
    }

    return (
        <div className="product-item">
            <div className="product-item__thumb">
                <div className="control">
                    <button className = "quickview-btn" 
                        onClick = {() => onOpenQuickView()}
                    ><span className="icon icon-eye"></span></button>

                    {
                        isCompare ? 
                        (
                            <button className = "quickview-btn"
                                onClick = {() => onOpenCompare()}
                            >
                                <span class="icon icon-loop"></span>
                            </button>
                        ) 
                        : ""
                    }
                    
                </div>
                
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