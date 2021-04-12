import React from 'react'
import './style.scss'

import {NavLink} from 'react-router-dom'

function ProductItem(props) {
    const onHandleAddCart = () =>{
        
    }

    const {
        isExistCart, 
        productAvatar,
        productAlias,
        productTitle,
        rating,
        productPromo,
        productPrice
    } = props
    
    return (
        <div className="product-item">
            <div className="product-item__thumb">
                <button 
                    className = "quickview-btn"
                    // onClick = {() => this.onOpenQuickView(productContent)}
                ><span class="icon icon-eye"></span></button>
                <div>
                    <img src= {productAvatar} alt="product" />
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
                <h4 className="product-title"><NavLink to={`/product-detail/${productAlias}`} >{productTitle}</NavLink></h4>
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
                        productPromo ? 
                        <del> <span class="price-symboy">$</span>{productPromo}</del> : 
                        ""
                    }
                    
                    <span> <span className="price-symboy">$</span>{productPrice}</span> 
                </p>
            </div>
        </div>
    )
}

export default ProductItem
