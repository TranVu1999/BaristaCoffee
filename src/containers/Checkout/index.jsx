import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import AccordingToggle from '../../commons/components/AccordingToggle';
import Breadcrumb from '../../commons/components/Breadcrumb';
import ConfirmInvoice from '../../features/Checkout/ConfimrInvoice';
import ConfirmInfomation from '../../features/Checkout/ConfirmInfomation';

import './style.scss'
import api from './../../api'
import * as Notify from './../../commons/constant/Notify'
import * as Validate from './../../commons/js/validate-input'

import {actOpenNotify} from './../../commons/modules/Notify/action'
import {actAddInvoice, actAddNewNotify} from './../../commons/modules/Account/action'
import {actUpdateUrl} from './../../commons/modules/Url/actions'

function ChecoutPage(props) {

    const listAddress = useSelector(state => state.accountReducer.addresses)
    const accountEmail = useSelector(state => state.accountReducer.email)
    const listCart = useSelector(state => state.cartReducer.data)
    
    const [fullname, setFullname] = useState({value: "", error: ""})
    const [phoneNumber, setPhoneNumber] = useState({value: "", error: ""})
    const [houseNumber, setHouseNumber] = useState({value: "", error: ""})
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [ward, setWard] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        if(listAddress.length > 0){
            const addressdefault = listAddress.filter(item => item.isDefault)[0]

            setFullname({value: addressdefault.fullname, error: ""})
            setPhoneNumber({value: addressdefault.phoneNumber, error: ""})
            setEmail(accountEmail)
            setWard({value: addressdefault.ward, error: ""})
            setDistrict({value: addressdefault.district, error: ""})
            setProvince({value: addressdefault.province, error: ""})
            setHouseNumber({value: addressdefault.houseNumber, error: ""})
        }
       
    }, [listAddress])

     // Update url
     useEffect(() =>{
        const {url} = props.match
        dispatch(actUpdateUrl({
            url
        }))
    }, [])

    const onHandleChange = event =>{
        const {name, value} = event.target

        switch(name){
            case 'fullname':
                setFullname({value, error: ""})
                break

            case 'phoneNumber':
                setPhoneNumber({value, error: ""})
                break
                
            case 'houseNumber':
                setHouseNumber({value, error: ""})
                break

            case 'province':
                setProvince(value)
                break   
                
            case 'district':
                setDistrict(value)
                break

            case 'ward':
                setWard(value)
                break

            default:
                break
        }
    }

    const onHandleBlur = event =>{
        const {name, value} = event.target

        switch(name){
            case 'fullname':
                if(!value){
                    setFullname({
                        ...fullname, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isFullname(value)){
                    setFullname({
                        ...fullname, 
                        error: Notify.IS_NOT_FULLNAME
                    })
                }
                break

            case 'phoneNumber':
                if(!value){
                    setPhoneNumber({
                        ...phoneNumber, 
                        error: Notify.IS_EMPTY
                    })
                }else if(!Validate.isPhoneNumber(value)){
                    setPhoneNumber({
                        ...phoneNumber, 
                        error: Notify.IS_NOT_PHONE_NUMBER
                    })
                }
                break

            case 'houseNumber':
                if(!value){
                    setHouseNumber({
                        ...houseNumber, 
                        error: Notify.IS_EMPTY
                    })
                }
                break

            default:
                break
        }
    }

    const onHanldeChooseAddress = index =>{
        const address = listAddress[index]

        setFullname({value: address.fullname, error: ""})
        setPhoneNumber({value: address.phoneNumber, error: ""})
        setEmail(accountEmail)
        setWard({value: address.ward, error: ""})
        setDistrict({value: address.district, error: ""})
        setProvince({value: address.province, error: ""})
        setHouseNumber({value: address.houseNumber, error: ""})
    }

    const renderListAddress = () =>{
        return listAddress.map((item, index) =>{
            return (
                <li 
                    className="item" 
                    key = {index}
                    onClick = {() => onHanldeChooseAddress(index)}
                >
                    <div className="info">
                        <div className="name"> 
                            {item.fullname}
                            {item.isDefault ? (
                                <span className="notify">
                                    <span aria-hidden="true" className="icon_check_alt2" />
                                    <span>Địa chỉ mặc định</span>
                                </span>
                            ): ""}
                            
                        </div>

                        <div className="address">
                            <span>Địa chỉ: </span>
                            {item.houseNumber}, {item.ward}, {item.district}, {item.province}
                        </div>

                        <div className="phone">
                            <span>Điện thoại: </span>
                            {item.phoneNumber}
                        </div>
                        
                    </div>
                </li>
            )
        })
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

    const renderPrice = (listSale, price, amount) =>{
        let sale = 0
        const originTotal = price * amount

        for(let item of listSale){
            if(amount < item.to && amount >= item.from){
                sale = item.price
            }
        }

        return originTotal - (originTotal * sale / 100)
    }

    const onHanldePlaceOrder = () =>{
        let flag = true

        // check fullname
        if(!fullname.value){
            flag = false
            setFullname({...fullname, error: Notify.IS_EMPTY})
        }

        // check province
        if(!province.value){
            flag = false
            setProvince({...province, error: Notify.IS_EMPTY})
        }

        // check district
        if(!district.value){
            flag = false
            setDistrict({...district, error: Notify.IS_EMPTY})
        }

        // check ward
        if(!ward.value){
            flag = false
            setWard({...ward, error: Notify.IS_EMPTY})
        }

        // check phone number
        if(!phoneNumber.value){
            flag = false
            setWard({...phoneNumber, error: Notify.IS_EMPTY})
        }

        // check accept
        if(flag){

            const listProduct = listCart.map(item =>{
                return {
                    productId: item.id,
                    amount: item.amount,
                    total: renderPrice(item.listSale, item.price, item.amount)
                }
            })

            const data = {
                fullname: fullname.value,
                province: province.value,
                district: district.value,
                ward: ward.value,
                houseNumber: houseNumber.value,
                phoneNumber: phoneNumber.value,
                total: renderTotal(),
                listProduct
            }

            api.post('invoice', data)
            .then(res =>{
                if(res.data.success){
                    dispatch(actAddInvoice(res.data.newInvoice))
                    dispatch(actOpenNotify({
                        isSuccess: true,
                        content: Notify.SUCCESS_NOTIFY
                    }))
                    if(res.data.notify){
                        dispatch(actAddNewNotify(res.data.notify))
                    }
                    window.location.href = "http://localhost:3600/comming-soon"
                }
            })
            .catch(err =>{
                console.log(err)
                dispatch(actOpenNotify({
                    isSuccess: false,
                    content: Notify.FAIL_NOTIFY
                }))
            })

            
        }else{
            dispatch(actOpenNotify({
                isSuccess: false,
                content: Notify.FAIL_NOTIFY
            }))
        }
        
    }

    return (
        <section className="main-page">
            <Breadcrumb title="Checkout"/>

            <div class="cf-container checkout-page">
                <AccordingToggle
                    label = "Are your have address?"
                    span = "Click here to enter your address"
                >
                    <ul className="lst-address">{renderListAddress()}</ul>
                </AccordingToggle>

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
                                    onBlur = {onHandleBlur}
                                    value = {fullname.value}
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
                                    onBlur = {onHandleBlur}
                                    value = {province.value}

                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="District"
                                    name = "district"
                                    onChange = {onHandleChange}
                                    onBlur = {onHandleBlur}
                                    value = {district.value}
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
                                    onBlur = {onHandleBlur}
                                    value = {ward.value}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="House number and street name" 
                                    name = "houseNumber"
                                    onChange = {onHandleChange}
                                    onBlur = {onHandleBlur}
                                    value = {houseNumber.value}
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
                                    onBlur = {onHandleBlur}
                                    value = {phoneNumber.value}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="input-control" 
                                    placeholder="Email" 
                                    value = {email}
                                />
                            </div>
                        </div>
                    </form>
                </ConfirmInfomation>
                <ConfirmInvoice/>

                <div class="confirm-action">
                    <button class="coffee-btn">Buy with 50 coins</button>
                    <button 
                        class="coffee-btn"
                        onClick = {onHanldePlaceOrder}
                    >Place Order</button>
                </div>
            </div>
            
            
        </section>
    );
}

export default ChecoutPage;