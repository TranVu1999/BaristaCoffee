import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="prod-item">
                <a href="/#" className="prod-thumb">
                <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg" alt="prod thumb" />
                </a>
                <div className="prod-text">
                <span className="prod-title"><a href="/#">Make it Simple</a> </span>
                <div className="product-rate">
                    <div className="product-rate--overlay" style={{width: '30%'}} />
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
