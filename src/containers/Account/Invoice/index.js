import React, { Component } from 'react';

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
                        <tr>
                        <td>
                            <a href="//#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>
                            <a href="/#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>
                            <a href="/#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>
                            <a href="/#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>
                            <a href="/#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>
                            <a href="/#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>
                            <a href="/#">351077915</a>
                        </td>
                        <td>03/01/2021</td>
                        <td>Chicken Soup For The Soul </td>
                        <td>62.000 ₫</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                    </tbody>
                    </table>
                    <ul className="lst-invoice-row">
                    <li className="item">
                        <a href="/#" className="invoice-box">
                        <div className="invoice--text">
                            <p className="invoice--title">Chicken Soup For The Soul - Tìm lại giá trị cuộc sống</p>
                            <p><span>Mã đơn hàng: </span> 351077915</p>
                            <p><span>Ngày đặt hàng: </span> 03/01/2021</p>
                            <p><span>Trạng thái: </span> Giao hàng thành công</p>
                        </div>
                        <div className="invoice--status">
                            <div className="fs1" aria-hidden="true" data-icon="" />
                        </div>
                        </a>
                    </li>
                    <li className="item">
                        <a href="/#" className="invoice-box">
                        <div className="invoice--text">
                            <p className="invoice--title">Chicken Soup For The Soul - Tìm lại giá trị cuộc sống</p>
                            <p><span>Mã đơn hàng: </span> 351077915</p>
                            <p><span>Ngày đặt hàng: </span> 03/01/2021</p>
                            <p><span>Trạng thái: </span> Giao hàng thành công</p>
                        </div>
                        <div className="invoice--status">
                            <div className="fs1 time" aria-hidden="true" data-icon="" />
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>

        )
    }
}
