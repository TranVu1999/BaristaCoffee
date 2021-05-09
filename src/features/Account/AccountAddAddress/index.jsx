import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types';

import InputField from './../../../commons/components/InputField'

import api from './../../../api'
import * as Notify from './../../../commons/constant/Notify'
import * as Validate from './../../../commons/js/validate-input'
import SelectField from '../../../commons/components/SelectField';
import CheckboxField from '../../../commons/components/CheckboxField';

import {actOpenNotify} from './../../../commons/modules/Notify/action'
import {actAddAddress} from './../../../commons/modules/Account/action'

AccountAddress.propTypes = {
    
};

function AccountAddress(props) {

    const [listProvince] = useState(["Hồ Chí Minh", "Hà Nội", "Quảng Ngãi"])
    const [listDistrict] = useState(["Quận 1", "Quận 2", "Quận 3"])
    const [listWard] = useState(["Tăng Nhơn Phú A", "Tăng Nhơn Phú B"])

    const [fullname, setFullname] = useState({value: "", error: ""})
    const [company, setCompany] = useState({value: "", error: ""})
    const [phoneNumber, setPhoneNumber] = useState({value: "", error: ""})
    const [houseNumber, setHouseNumber] = useState({value: "", error: ""})
    const [province, setProvince] = useState(listProvince[0])
    const [district, setDistrict] = useState(listDistrict[0])
    const [ward, setWard] = useState(listWard[0])
    const [isDefault, setIsDefault] = useState(false)

    const dispatch = useDispatch()

    const onHandleChange = event =>{
        const {name, value} = event.target

        switch(name){
            case 'fullname':
                setFullname({value, error: ""})
                break

            case 'company':
                setCompany({value, error: ""})
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

    const onHanldeGetChecked = () =>{
        setIsDefault(!isDefault)
    }

    const onHanldeSubmit = event =>{
        event.preventDefault()

        // check error
        let flag = true
        if(!fullname.value){
            flag = false
            setFullname({...fullname, error: Notify.IS_EMPTY})
        }
        if(!phoneNumber.value){
            flag = false
            setPhoneNumber({...phoneNumber, error: Notify.IS_EMPTY})
        }

        // is accept
        if(flag){
            const data = {
                fullname: fullname.value,
                company: company.value,
                phoneNumber: phoneNumber.value,
                province,
                district, 
                ward,
                houseNumber: houseNumber.value,
                isDefault
            }

            api.post('address/', data)
            .then(res =>{
                if(res.data.success){
                    dispatch(actAddAddress(res.data.newAddress))
                    dispatch(actOpenNotify({
                        isSuccess: true,
                        content: Notify.SUCCESS_NOTIFY
                    }))
                }
            })
            .catch(err =>{
                console.log(err)
            })
            
        }else{
            dispatch(actOpenNotify({
                isSuccess: false,
                content: Notify.FAIL_NOTIFY
            }))
        }
    }

    return (
        <div className="account__container--widget">
            <span className="account__title">Tạo địa chỉ mới</span>
            <div className="account__content">
                <form 
                    className="account__info"
                    onSubmit = {onHanldeSubmit}
                >
                    {/* Full name */}
                    <div className="form-group">
                        <div className="input-label">Họ tên</div>
                        <InputField
                            value = {fullname.value}
                            placeholder ="Nhập tên"
                            onHandleChange = {onHandleChange}
                            name = 'fullname'
                            onHandleBlur = {onHandleBlur}
                            error = {fullname.error}
                        />                            
                    </div>

                    {/* company name */}
                    <div className="form-group">
                        <div className="input-label">Công ty</div>
                        <InputField
                            value = {company.value}
                            placeholder ="Nhập công ty"
                            onHandleChange = {onHandleChange}
                            name = 'company'
                            onHandleBlur = {onHandleBlur}
                            error = {company.error}
                        />                            
                    </div>

                    {/* Phone number */}
                    <div className="form-group">
                        <div className="input-label">Số điện thoại</div>
                        <InputField
                            value = {phoneNumber.value} 
                            placeholder ="Nhập số điện thoại"
                            onHandleChange = {onHandleChange}
                            name = 'phoneNumber'
                            onHandleBlur = {onHandleBlur}
                            error = {phoneNumber.error}
                        />
                    </div>

                    {/* Province */}
                    <div className="form-group">
                        <div className="input-label">Tỉnh/Thành phố</div>
                        <SelectField
                            value = {province}
                            name = "province"
                            placeholder = "Chọn Tỉnh/Thành phố"
                            listOption = {listProvince}
                            onGetSelection = {onHandleChange}
                        />
                    </div>

                    {/* District */}
                    <div className="form-group">
                        <div className="input-label">Quận huyện</div>
                        <SelectField
                            value = {district}
                            name = "district"
                            placeholder = "Chọn Quận huyện"
                            listOption = {listDistrict}
                            onGetSelection = {onHandleChange}
                        />
                    </div>

                    {/* Ward */}
                    <div className="form-group">
                        <div className="input-label">Phường xã</div>
                        <SelectField
                            value = {ward}
                            name = "ward"
                            placeholder = "Chọn Phường xã"
                            listOption = {listWard}
                            onGetSelection = {onHandleChange}
                        />
                    </div>

                    <div className="form-group">
                        <div className="input-label">Địa chỉ</div>
                        <div className="input-group">
                            <textarea 
                                name = "houseNumber"
                                cols={30} rows={4} 
                                placeholder="Nhập địa chỉ" 
                                value={houseNumber.value}
                                onChange = {onHandleChange}
                                onBlur = {onHandleBlur}
                            />
                        </div>
                    </div>

                    
                    <div className="form-group">
                        <div className="input-label">Mặc định</div>
                        <div className="input-group">
                            <CheckboxField
                                onGetChecked = {onHanldeGetChecked}
                                isChecked = {isDefault}
                                label = "Đặt làm mặc định"
                                id = "setDefault"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label" />
                        <button>Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AccountAddress;