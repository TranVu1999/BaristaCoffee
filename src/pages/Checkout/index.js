import React, { Component } from 'react';
import MainPage from './../../commons/components/MainPage';
import Breadcrumb from './../../commons/components/Breadcrumb';
import AccordingToggle from '../../commons/components/AccordingToggle';
import ConfirmInfo from './ConfirmInfo';
import ConfirmInvoice from './ConfirmInvoice';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class CheckoutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            discountCost: 0
        }
    }

    onHandleGetDiscount = (cost) =>{
        this.setState({
            discountCost: cost
        })
    }

    getSubTotalCart = () =>{
        const {dataCart} = this.props;
        let cost = 0;
        for(let item of dataCart){
            cost += item.prodPrice * item.amount;
        }
        return cost;
    }

    render() {
        const {dataCart} = this.props;
        const subTotalCart = this.getSubTotalCart();
        const {discountCost} = this.state;

        return (
            <MainPage>
                <Breadcrumb mainTitle = "Checkout"/>
                
                <div class="cf-container checkout-page">

                    <ConfirmInfo 
                        subTotalCart = {subTotalCart}
                        onHandleGetDiscount = {this.onHandleGetDiscount}
                    />
                    <ConfirmInvoice 
                        dataCart= {dataCart}
                        subTotalCart = {subTotalCart}
                        discountCost = {discountCost}
                    />
                    <div class="confirm-action">
                        <button class="coffee-btn">Place Order</button>
                    </div>
                </div>
                
                
            </MainPage>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
