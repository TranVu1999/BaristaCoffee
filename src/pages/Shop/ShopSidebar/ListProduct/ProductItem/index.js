import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const {productContent} = this.props;

        return (
            <div className="prod-item">
                <a href="/#" className="prod-thumb">
                <img src={productContent.productAvatar} alt="prod thumb" />
                </a>
                <div className="prod-text">
                <span className="prod-title"><a href="/#">{productContent.productTitle}</a> </span>
                <div className="product-rate">
                    <div 
                        className="product-rate--overlay" 
                        style={{width: 100 - productContent.productRating + '%'}} 
                    />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                    <span className="icon icon-star-full" />
                </div>
                <p className="product-price">
                    <del> <span className="price-symboy">$</span>98.00</del>
                    <span> <span className="price-symboy">$</span>79.00</span> 
                </p>
                </div>
            </div>
        )
    }
}
