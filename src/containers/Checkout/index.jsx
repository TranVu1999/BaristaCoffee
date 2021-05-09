import React from 'react';
import Breadcrumb from '../../commons/components/Breadcrumb';
import ConfirmInvoice from '../../features/Checkout/ConfimrInvoice';
import ConfirmInfomation from '../../features/Checkout/ConfirmInfomation';

import './style.scss'

function ChecoutPage() {

    const onHandleChange = event =>{

    }

    return (
        <section className="main-page">
            <Breadcrumb title="Checkout"/>

            <div class="cf-container checkout-page">
                <ConfirmInfomation>
                    <form className="form-info-invoice">
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Full Name" 
                                    name = "fullname"
                                    onChange = {onHandleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="PostCode / Zip" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Province / City" 
                                    name = "province"
                                    onChange = {onHandleChange}

                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="District"
                                    name = "district"
                                    onChange = {onHandleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Wards" 
                                    name = "wards"
                                    onChange = {onHandleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="House number and street name" 
                                    name = "houseNumber"
                                    onChange = {onHandleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Phone" 
                                    name = "phoneNumber"
                                    onChange = {onHandleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Email" 
                                />
                            </div>
                        </div>
                    </form>
                </ConfirmInfomation>
                <ConfirmInvoice/>

                <div class="confirm-action">
                    <button class="coffee-btn">Buy with 50 coins</button>
                    <button class="coffee-btn">Place Order</button>
                </div>
            </div>
            
            
        </section>
    );
}

export default ChecoutPage;