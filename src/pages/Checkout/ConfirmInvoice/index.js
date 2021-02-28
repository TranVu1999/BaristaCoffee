import React, { Component } from 'react';
import './style.scss';
import {connect} from 'react-redux';

class ConfirmInvoice extends Component {
    getSubTotalCart = () =>{
        const {dataCart} = this.props;
        let cost = 0;
        for(let item of dataCart){
            cost += item.prodPrice * item.amount;
        }
        return cost;
    }
    
    renderInvoiceItem = () =>{
        const {dataCart} = this.props;
        if(dataCart.length > 0){
            return dataCart.map((item, index) =>{
                return (
                    <div key = {index} className="row">
                        <div className="left">
                            {item.prodTitle} x {item.amount}
                        </div>
                        <div className="right">
                            ${item.prodPrice * item.amount}.00
                        </div>
                    </div>
                )
            })
        }
        return null;
    }

    render() {
        const subTotal = this.getSubTotalCart();
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
                        {this.renderInvoiceItem()}
                    </div>

                    <div className="detail-invoice__footer">
                        <div className="row">
                            <div className="left">Subtotal</div>
                            <div className="right">${subTotal}.00</div>
                        </div>
                        <div className="row">
                            <div className="left">Shipping</div>
                            <div className="right">Free Shipping</div>
                        </div>
                        <div className="row">
                            <div className="left">Total</div>
                            <div className="right">${subTotal}.00</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data
    }
}

export default connect(mapStateToProps)(ConfirmInvoice)
