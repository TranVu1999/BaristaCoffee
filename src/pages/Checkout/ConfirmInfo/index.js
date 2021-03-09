import React, { Component } from 'react';
import './style.scss';
import api from './../../../api';
import AccordingToggle from '../../../commons/components/AccordingToggle';
import Popup from '../../../commons/components/Popup';


class ConfirmInfo extends Component {
    constructor(props){
        super(props);
        this.state ={
            discount: {
                error: "",
                code: "",
                cost: 0
            },
            userInfo: {
                userCode: "",
                email: "",
                phoneNumber: "",
                fullname: "",
                address: [
                    {
                        company: "",
                        province: "",
                        district: "",
                        wards: "",
                        houseNumber: "",
                        phoneNumber:"",
                        isDefault: true
                    }
                ]
            }
        }
    }

    renderUserAddress = (listAddress) =>{
        for(let addressItem of listAddress){
            if(addressItem.isDefault){
                return addressItem;
            }
        }

        return listAddress[0];
    }

    onHandleChange = (event) =>{
        const {name, value} = event.target;
        
        if(name === "code"){
            this.setState({
                ...this.state,
                discount: {
                    ...this.state.discount,
                    code: value
                }
            })
        }

    }

    onCheckDiscountCode = (event) =>{
        event.preventDefault();
        const {code} = this.state.discount;
        const {subTotalCart} = this.props;
        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            api.get(`/account/get-discount/${accountInfo.accountId}/${code}`)
            .then(res =>{
                if(res.data){
                    if(subTotalCart < res.data.cost){
                        this.setState({
                            ...this.state,
                            discount: {
                                error: "The value of this code is greater than the value of the invoice.",
                                code: "",
                                cost: 0
                            }
                        })
                            
                    }else{
                        this.props.onHandleGetDiscount(res.data.cost);
                        this.setState({
                            discount: {
                                error: "",
                                ...res.data
                            },
                            userInfo: {
                                ...this.state.userInfo,
                                userCode: res.data.code
                            }
                        })
                    }
                    
                }else{
                    this.setState({
                        ...this.state,
                        discount: {
                            error: "This code is not used.",
                            code: "",
                            cost: 0
                        }
                    })
                }
                
            })
            .catch(err =>{
                console.log("err", err)
            })
        }
        
    }

    onHandleOpenLoginForm = (isOpen) =>{
        this.setState({
            ...this.state,
            discount: {
                error: "",
                code: "",
                cost: 0
            }
        })
    }

    render() {
        const {userInfo, discount} = this.state;
        const address = this.renderUserAddress (userInfo.address)

        return (
            <>
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
                                <form 
                                    onSubmit = {this.onCheckDiscountCode}
                                >
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            class="input-control" 
                                            placeholder="Coupon Code"
                                            name="code"
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <button class="coffee-btn">Apply Coupon</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </AccordingToggle>

                <div className="confirm-info">
                    <h3>BilLing &amp; Shipping</h3>
                    <form className="form-info-invoice">
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Full Name" 
                                    value = {userInfo.fullname}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="PostCode / Zip" 
                                    value = {userInfo.userCode}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Province / City" 
                                    value = {address.province}

                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="District"
                                    value = {address.district}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Wards" 
                                    value = {address.wards}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="House number and street name" 
                                    value = {address.houseNumber}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Phone" 
                                    value = {address.phoneNumber}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Email" 
                                    value = {userInfo.email}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <Popup 
                    popupTitle="Notify" isOpen = {discount.error !== ''}
                    onHandleOpenLoginForm = {this.onHandleOpenLoginForm}
                >
                    <AccordingToggle>
                        <div className="accordition-toggle--box">
                            <div className = "accordition-span">{discount.error}</div>
                        </div>
                    </AccordingToggle>
                </Popup>
            </>
        )
    }

    componentDidMount(){
        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            api.get(`account/get-user/${accountInfo.accountId}`)
            .then(res =>{
                this.setState({
                    ...this.setState,
                    userInfo: res.data
                })
            })
            .catch(err =>{
                console.log("err", err)
            })
        }
    }
}

export default ConfirmInfo
