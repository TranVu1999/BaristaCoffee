import React, { Component } from 'react';
import './style.scss';

export default class ProductThumb extends Component {
    renderImage = () =>{
        const {productImage} = this.props;
        if(productImage){
            return (
                <>
                    <div className="product-thumb">
                        <img src={productImage.productAvatar} alt="product avatar" />
                    </div>

                    <div className="d-flex-between product-lst-images">
                        
                        {
                            productImage.productMoreImage.map((item, index) =>{
                                return (
                                    <div 
                                        className="product-item--image"
                                        key = {index}
                                    >
                                        <div className="product-thumb">
                                            <img src={item} alt="product" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </>
            )
        }

        return null;
    }

    render() {
        return (
            <div className="product-images">
                {this.renderImage()}
            </div>
        )
    }
}
