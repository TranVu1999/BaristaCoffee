import React from 'react';
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import According from './../../../commons/components/According'

import './style.scss'

function AccountListInvoice(props) {

    const listInvoice = useSelector(state => state.accountReducer.invoices)

    const renderListInvoice = () =>{
    }

    return (
        <div className="account-content--box">
            <span className="account__title">Đơn hàng của tôi</span>
            <div className="account__content">
                {listInvoice.length > 0 ? (
                    <div className="d-table lst-invoice">
                        <div className = "d-table-row lst-invoice--header">
                            <div className = "invoice-id">Mã đơn hàng</div>
                            <div className = "invoice-date">Ngày mua</div>
                            <div className = "invoice-prod">Sản phẩm</div>
                            <div className = "invoice-total">Tổng tiền</div>
                            <div className = "invoice-status">Trạng thái đơn hàng</div>
                        </div>
                        <div className = "lst-invoice--body">
                            {renderListInvoice()}
                        </div>
                    </div>
                ) : (
                    <According> 
                        <div className="accordition-toggle--box empty-icon">
                            <div className = "accordition-span">
                                <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                                <p>Bạn chưa có đơn hàng nào</p>
                                <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                            </div>
                        </div>
                    </According>
                )}
                
            </div>
        </div>
    );
}

export default AccountListInvoice;