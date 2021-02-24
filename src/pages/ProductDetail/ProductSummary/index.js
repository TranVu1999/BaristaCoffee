import React, { Component } from 'react';
import FormAddCart from '../FormAddCart';
import './style.scss';

export default class ProductSummary extends Component {
    render() {
        return (
            <div className="product-summary">
                <h3 className="product-title">Paper Bag</h3>
                <div className="product-rate__box">
                    <div className="product-rate">
                    <div className="product-rate--overlay" style={{width: '10%'}} />
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
                    <del> <span className="price-symboy">$</span>98.00</del>
                    <span> <span className="price-symboy">$</span>79.00</span> 
                </p>
                <p className="product__short-desc">Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.</p>

                <FormAddCart/>

                <div className="product-meta">
                    <div className="product-meta__item">
                    <label>Sku</label>
                    <span>11</span>
                    </div>
                    <div className="product-meta__item">
                    <label>Category</label>
                    <span>Coffee</span>
                    </div>
                    <div className="product-meta__item">
                    <label>Tag</label>
                    <span><a href="/#">Paper Bag</a></span>
                    </div>
                </div>
                <div className="product-meta">
                    <div className="product-meta__item">
                    <label>Share</label>
                    <ul className="lst-share-icon">
                        <li><a href="/#"><span aria-hidden="true" className="social_facebook" /></a></li>
                        <li><a href="/#"><span aria-hidden="true" className="social_twitter" /></a></li>
                        <li><a href="/#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                        <li><a href="/#"><span aria-hidden="true" className="social_tumblr" /></a></li>
                    </ul>
                    </div>
                </div>
            </div>

        )
    }
}
