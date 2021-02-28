import React, { Component } from 'react';
import MainPage from './../../commons/components/MainPage';
import Breadcrumb from './../../commons/components/Breadcrumb';
import AccordingToggle from '../../commons/components/AccordingToggle';
import ConfirmInfo from './ConfirmInfo';
import ConfirmInvoice from './ConfirmInvoice';

export default class CheckoutPage extends Component {
    render() {
        return (
            <MainPage>
                <Breadcrumb mainTitle = "Checkout"/>
                
                <div class="cf-container checkout-page">
                    <AccordingToggle>
                        <div class="accordition-toggle">
                            <input type="checkbox" id="1"/>
                            <div class="accordition-toggle--box">
                                <div class="accordition-span">
                                    Have a coupon? 
                                    <label for="1"> Click here to enter your code</label>
                                </div>
                                <div class="accordition-detail">
                                    <span>If you have a coupon code, please apply it below.</span>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="input-control" placeholder="Coupon Code"/>
                                        </div>
                                        <div class="form-group">
                                            <button class="coffee-btn">Apply Coupon</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </AccordingToggle>

                    <ConfirmInfo/>
                    <ConfirmInvoice/>
                    <div class="confirm-action">
                        <button class="coffee-btn">Place Order</button>
                    </div>
                </div>
                
                
            </MainPage>
        )
    }
}
