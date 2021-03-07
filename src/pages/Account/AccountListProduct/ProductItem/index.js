import React, { Component } from 'react';
import './style.scss';

export default class ProductItem extends Component {

    render() {
        const {prodItem} = this.props.prodContent;
        console.log("prodContent", prodItem);

        return (
            <li className="product-item">
                <a href="/#" className="product-item__thumb">
                    <img src={prodItem.productAvatar} alt="product" />
                    <button className="add-to-cart"><span className="icon icon-libreoffice" /> Add To Cart</button>
                </a>
                <div className="product-item__text">
                    <div className="d-flex-start">
                    <h4 className="product-title"><a href="/#">{prodItem.productTitle}</a></h4>
                    <div className="product-rate">
                        <div 
                            className="product-rate--overlay" 
                            style={{width: 100 - prodItem.productRating + "%"}} 
                        />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                    </div>
                    </div>
                    <p className="product-price">
                    <span> <span className="price-symboy">$</span>{prodItem.productPrice}</span> 
                    </p>
                    <p className="product__short-desc">Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil interpretaris pro, alia illum ea vim. Alienum phaedrum  ...</p>
                </div>
                <button className="product-item__del">
                    <span aria-hidden="true" className="icon_close_alt2" />
                </button>
            </li>
        )
    }
}
