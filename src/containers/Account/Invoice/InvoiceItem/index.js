import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class InvoiceItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    <NavLink to = "/my-account/invoice-detail">
                        351077915
                    </NavLink>
                </td>
                <td>03/01/2021</td>
                <td>Chicken Soup For The Soul </td>
                <td>62.000 ₫</td>
                <td>Giao hàng thành công</td>
            </tr>
        )
    }
}
