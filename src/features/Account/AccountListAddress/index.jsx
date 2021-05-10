import React from 'react';
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'

AccountAddress.propTypes = {
    
};

function AccountAddress(props) {

    const listAddress = useSelector(state => state.accountReducer.addresses)


    const renderListAddress = () =>{
        return listAddress.map((item, index) =>{
            return (
                <li className="item" key = {index}>
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
                    <div className="action">
                        <NavLink 
                            to = "/my-account/update-address"
                            className="edit"
                        >
                            Chỉnh sửa
                        </NavLink>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className="account-content--box">
            <span className="account__title">Địa chỉ của tôi</span>
            <div className="account__content">
                <div className="account__address">
                    <div className="add-address">
                        <NavLink to="/account/add-address" className="d-flex-start">
                            <span aria-hidden="true" className="icon_plus" /> 
                            Thêm địa chỉ mới
                        </NavLink>
                    </div>
                    
                    <ul className="lst-address">{renderListAddress()}</ul>
                </div>
            </div>
        </div>
    );
}

export default AccountAddress;