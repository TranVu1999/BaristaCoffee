import React, { Component } from 'react';
import FormAddCart from './../FormAddCart';
import {connect} from 'react-redux';
import {actCloseQuickView} from './../../modules/QuickView/actions';
import './style.scss';

class QuickView extends Component {
    onHandleAddCart = () =>{
    }

    onChooseShowImage = (indexActiveimage) =>{
        this.setState({
            indexActiveimage
        })
    }

    onCloseQuickView = () =>{
        this.props.onCloseQuickView(false)
    }

    render() {
        const {quickViewInfo} = this.props;
        const {productContent} = quickViewInfo;
        console.log("quickViewInfo", quickViewInfo.productContent)

        return (
            <div 
                className = {quickViewInfo.isOpenQuickView ? "quickview-box open" : "quickview-box"}
            >               
                <div className = "quickview-container">
                    <button 
                        className="close-quickview"
                        onClick = {this.onCloseQuickView}
                    >
                        <span aria-hidden="true" className="icon_close_alt2" />
                    </button>
                    <div className = "quickview--left">
                        <div className = "quickview__thumb">
                            <img src = {productContent.productAvatar} alt = "thumbnail"/>
                        </div>
                        <div className = "quickview__image">
                            <div 
                                className = {quickViewInfo.indexActiveImage === 0 ? "image--item active" : "image--item"}
                                onClick = {() => this.onChooseShowImage(0)}
                            >
                                <img src = "https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-6-gallery-1.jpg" alt = "thumbnail"/>
                            </div>
                            <div 
                                className = {quickViewInfo.indexActiveImage === 1 ? "image--item active" : "image--item"}
                                onClick = {() => this.onChooseShowImage(1)}
                            >
                                <img src = "https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-6-gallery-2.jpg" alt = "thumbnail"/>
                            </div>
                            <div 
                                className = {quickViewInfo.indexActiveImage === 2 ? "image--item active" : "image--item"}
                                onClick = {() => this.onChooseShowImage(2)}
                            >
                                <img src = "https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-6-gallery-4-2.jpg" alt = "thumbnail"/>
                            </div>
                            <div 
                                className = {quickViewInfo.indexActiveImage === 3 ? "image--item active" : "image--item"}
                                onClick = {() => this.onChooseShowImage(3)}
                            >
                                <img src = "https://barista.qodeinteractive.com/wp-content/uploads/2016/03/product-image-6-gallery-3-100x100.jpg" alt = "thumbnail"/>
                            </div>
                        </div>
                    </div>

                    <div className = "quickview--right">
                        <h2 className="product-title">{productContent.productTitle}</h2>

                        <div className="d-flex-start product-rate__box">
                            <div className="product-rate">
                                <div className="product-rate--overlay" style={{width: 100 - productContent.productRating + '%'}}/>

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

                            {
                                productContent.productPromo ? 
                                <del> <span class="price-symboy">$</span>{productContent.productPromo}</del> : 
                                ""
                            }
                            <span> <span className="price-symboy">$</span>{productContent.productPrice}</span> 
                        </p>

                        <p className="product__short-desc">{productContent.productShortDesc}</p>

                        <FormAddCart 
                            onHandleAddCart = {this.onHandleAddCart}
                        />

                        <div className = "read-more text-right">
                            <a href = "/#" className = "barista-read-more">Go to detail <span className="icon icon-arrow-right2" /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        quickViewInfo : state.quickViewReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onCloseQuickView: isClose =>{
            dispatch(actCloseQuickView(isClose))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickView)
