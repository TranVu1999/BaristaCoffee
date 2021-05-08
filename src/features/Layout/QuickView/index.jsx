import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './style.scss'

import FormAddCart from './../FormAddCart'

import {actCloseQuickView, actChangeImage} from './../../../commons/modules/QuickView/action'


function QuickView(props) {

    const showSmallImage = useSelector(state => state.quickViewReducer.showSmallImage)
    const indexActiveImage = useSelector(state => state.quickViewReducer.indexActiveImage)
    const isOpenQuickView = useSelector(state => state.quickViewReducer.isOpenQuickView)
    const avatar = useSelector(state => state.quickViewReducer.avatar)
    const title = useSelector(state => state.quickViewReducer.title)
    const rating = useSelector(state => state.quickViewReducer.rating)
    const price = useSelector(state => state.quickViewReducer.price)
    const promo = useSelector(state => state.quickViewReducer.promo)
    const shortDescription = useSelector(state => state.quickViewReducer.shortDescription)
    const moreImage = useSelector(state => state.quickViewReducer.moreImage)

    const dispatch = useDispatch()

    const onCloseQuickView = () =>{
        dispatch(actCloseQuickView())
    }

    const onChooseShowImage = index =>{
        dispatch(actChangeImage(index))
    }

    const renderMoreImage = () =>{
        if(moreImage.length > 0){
            let listShow = moreImage.slice(0, 4)

            return listShow.map((item, index) =>{
                return (
                    <div 
                        key = {index}
                        className = {indexActiveImage === index ? "image--item active" : "image--item"}
                        onClick = {() => onChooseShowImage(index)}
                    >
                        <img src = {item} alt = "thumbnail"/>
                    </div>
                )
            })
        }
        return null;
    }

    const onHandleAddCart = () =>{

        
    }

    return (
        <div className = {isOpenQuickView ? "quickview-box open" : "quickview-box"}>               
            <div className = "quickview-container">
                <button 
                    className="close-quickview"
                    onClick = {onCloseQuickView}
                >
                    <span aria-hidden="true" className="icon_close_alt2" />
                </button>
                <div className = "quickview--left">
                    <div className = "quickview__thumb">
                        <img src = {
                            !showSmallImage ? avatar : moreImage[indexActiveImage]
                            
                        } alt = "thumbnail"/>
                    </div>
                    <div className = "quickview__image">
                        {renderMoreImage()}
                    </div>
                </div>

                <div className = "quickview--right">
                    <h2 className="product-title">{title}</h2>

                    <div className="d-flex-start product-rate__box">
                        <div className="product-rate">
                            <div className="product-rate--overlay" style={{width: 100 - rating + '%'}}/>

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
                            promo ? 
                            <del> <span class="price-symboy">$</span>{promo}</del> : 
                            ""
                        }
                        <span> <span className="price-symboy">$</span>{price}</span> 
                    </p>

                    <p className="product__short-desc">{shortDescription}</p>

                    <FormAddCart 
                        onHandleAddCart = {onHandleAddCart}
                    />

                    <div className = "read-more text-right">
                        <a href = "/#" className = "barista-read-more">Go to detail <span className="icon icon-arrow-right2" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default QuickView;