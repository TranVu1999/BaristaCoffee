import React from 'react';
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'

import {standardPrice} from './../../../commons/js/helpers'

ConfirmInvoice.propTypes = {
    
};

function ConfirmInvoice(props) {
    const listCart = useSelector(state => state.cartReducer.data)

    const checkSale = (listSale, amount) =>{
        let resSale = 0
        for(let item of listSale){
            if(amount < item.to && amount >= item.from){
                resSale = item.price
            }
        }

        return resSale
    }

    const renderPrice = (listSale, price, amount) =>{
        const sale = checkSale(listSale, amount)
        const originTotal = price * amount
        if(sale){
            return (
                <>
                    <del>$ {standardPrice(originTotal)}</del>
                    $ {standardPrice(originTotal - originTotal * sale / 100)}
                </>
            )
        }

        return "$ " + standardPrice(originTotal)
    }

    const renderInvoiceItem = () =>{

        if(listCart.length > 0){
            return listCart.map((item, index) =>{
                return (
                    <div key = {index} className="row">
                        <div className="left">
                            {item.title} x {item.amount}
                        </div>
                        <div className="right">
                            {renderPrice(item.listSale, item.price, item.amount)}
                        </div>
                    </div>
                )
            })
        }
        return null;
    }

    const renderTotal = () =>{
        let total = 0

        for(let productItem of listCart){
            let sale = 0
            for(let saleItem of productItem.listSale){
                if(saleItem.from > productItem.amount){
                    break
                }
                sale = saleItem.price
            }

            let originTotal = productItem.amount * productItem.price
            total += originTotal - (originTotal * sale) / 100
        }

        return total
    }

    const renderSubTotal = () =>{
        let subTotal = 0;
        for(let productItem of listCart){
            subTotal += productItem.amount * productItem.price
        }

        return subTotal
    }

    return (
        <div className="confirm-invoice">
            <h3>Your Order</h3>
            <div className="detail-invoice">
                <div className="detail-invoice__header">
                    <div className="row">
                        <div className="left"><h4>Product</h4></div>
                        <div className="right"><h4>Subtotal</h4></div>
                    </div>

                </div>
                <div className="detail-invoice__body">
                    {renderInvoiceItem()}
                </div>

                <div className="detail-invoice__footer">
                    <div className="row">
                        <div className="left">Subtotal</div>
                        <div className="right">$ {standardPrice(renderSubTotal())}</div>
                    </div>
                    <div className="row">
                        <div className="left">Shipping</div>
                        <div className="right">Free Shipping</div>
                    </div>
                    <div className="row">
                        <div className="left">Total</div>
                        <div className="right">$ {standardPrice(renderTotal())}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmInvoice;