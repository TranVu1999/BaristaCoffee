import React from 'react';
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import According from './../../../commons/components/According'
import PropTypes from 'prop-types';
import './style.scss'

import {standardPrice} from './../../../commons/js/helpers'
import {actOpenNotify} from './../../../commons/modules/Notify/action'
import {actRemoveProduct} from './../../../commons/modules/Account/action'
import api from './../../../api'

AccountListProduct.propTypes = {
    title: PropTypes.string,
    listProduct: PropTypes.array,
};

AccountListProduct.defaultProps = {
    title: "",
    listProduct: []
}

function AccountListProduct(props) {
    const {title, listProduct} = props
    const amount = listProduct.length

    const dispatch = useDispatch();

    const onHanldeDelete = productId =>{
        let strConvertTitle = ""
        switch(title){
            case "Sản phẩm đã xem":
                strConvertTitle = "readed" 
                break

                        
            default:
                strConvertTitle = "readed"
                break
        }

        api.delete(`/auth/remove-product/${strConvertTitle}/${productId}`)
        .then(res =>{
            if(res.data.success){
                dispatch(actRemoveProduct({
                    typeProduct: "readed",
                    productId
                }))
                dispatch(actOpenNotify({
                    isSuccess: true,
                    content: res.data.message
                }))
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const renderListProduct = () =>{
        if(amount > 0){
            return listProduct.map((item, index) =>{
                return (
                    <li key = {index} className="product-item" >
                        <a href="/#" className="product-item__thumb">
                            <img src={item.avatar} alt="product" />
                            <button className="add-to-cart"><span className="icon icon-libreoffice" /> Add To Cart</button>
                        </a>
                        <div className="product-item__text">
                            <div className="d-flex-start">
                            <h4 className="product-title"><a href="/#">{item.title}</a></h4>
                            <div className="product-rate">
                                <div className="product-rate--overlay" style={{width: 100 - item.rating + '%'}} />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>
                            </div>
                            <p className="product-price">
                            <span> <span className="price-symboy">$</span>{standardPrice(item.price)}</span> 
                            </p>
                            <p className="product__short-desc">{item.shortDescription}</p>
                        </div>
                        <button 
                            className="product-item__del"
                            onClick = {() => onHanldeDelete(item._id)}
                        >
                            <span aria-hidden="true" className="icon_close_alt2" />
                        </button>
                    </li>
                )
            })
        }
        return (
            <According> 
                <div className="accordition-toggle--box empty-icon">
                    <div className = "accordition-span">
                        <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                        <p>Bạn chưa có sản phẩm nào</p>
                        <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                    </div>
                </div>
            </According>
        )
    }

    return (
        <div className="account-content--box">
            <span className="account__title">{title} ({amount})</span>

            <div className="account__content">
                <div className="row-product">
                    <ul className = "lst-product">
                        {renderListProduct()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AccountListProduct;