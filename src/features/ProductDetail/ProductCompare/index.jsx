import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'

import {actCloseCompare} from './../../../commons/modules/Compare/action'

ProductCompare.propTypes = {
    
};

function ProductCompare(props) {

    const isOpenCompare = useSelector(state => state.compareReducer.isOpenCompare)
    const productRight = useSelector(state => state.compareReducer.productRight)
    const productLeft = useSelector(state => state.compareReducer.productLeft)

    const dispatch = useDispatch()

    const onHandleCloseCompare = () =>{
        dispatch(actCloseCompare())
    }

    return (
        <div className = {isOpenCompare ? "compare-box open" : "compare-box"}>
            <div className="compare-container">
                <button className="close-compare" onClick = {() => onHandleCloseCompare()}>
                    <span aria-hidden="true" className="icon_close_alt2" />
                </button>

                <div className="compare-table">
                    {/* avatar */}
                    <div className="compare__row">
                        <div className="compare__label">Avatar</div>
                        <div className="compare__item">
                            <div className="product-thumb">
                                <img src = {productLeft.avatar}alt="product" />
                                <h4>{productLeft.title}</h4>
                            </div>
                        </div>
                        <div className="compare__item">
                            <div className="product-thumb">
                                <img src = {productRight.avatar} alt="product" />
                                <h4>{productRight.title}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="compare__row price">
                        <div className="compare__label">Price</div>
                        <div className="compare__item">
                            <span class="product-price"><span> <span class="price-symboy">$</span>{productLeft.price}</span></span>
                        </div>
                        <div className="compare__item">
                            <span class="product-price"><span> <span class="price-symboy">$</span>{productRight.price}</span></span>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="compare__row ">
                        <div className="compare__label">Weight</div>
                        <div className="compare__item">
                            <span>{productLeft.weight} kg</span>
                        </div>
                        <div className="compare__item">
                            <span>{productRight.weight} kg</span>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="compare__row ">
                        <div className="compare__label">Dimensions</div>
                        <div className="compare__item">
                            <span>{productLeft.width} x {productLeft["length"]} x {productLeft.height} in</span>
                        </div>
                        <div className="compare__item">
                            <span>{productRight.width} x {productRight["length"]} x {productRight.height} in</span>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="compare__row rating">
                        <div className="compare__label">Rating</div>
                        <div className="compare__item">
                            <span className="number">{productLeft.rating / 20}</span>
                            <div className="product-rate">
                                <div className="product-rate--overlay" style={{width: 100 - productLeft.rating + "%"}} />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>
                        </div>

                        <div className="compare__item">
                            <span className="number">{productRight.rating / 20}</span>
                            <div className="product-rate">
                                <div className="product-rate--overlay" style={{width: 100 - productRight.rating + "%"}} />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCompare;