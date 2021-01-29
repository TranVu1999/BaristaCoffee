import React, { Component } from 'react';
import InvoiceItem from './InvoiceItem';

import './style.scss';

export default class AccountInvoice extends Component {
    render() {
        return (
            <div className="account-content--box">
                <span className="account__title">Đơn hàng của tôi</span>
                <div className="account__content">
                    <table className="lst-invoice">
                        <thead>
                            <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày mua</th>
                            <th>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái đơn hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
