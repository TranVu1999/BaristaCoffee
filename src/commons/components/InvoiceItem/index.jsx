import React from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import './style.scss'

import {standardPrice, standardDateTime} from './../../js/helpers'

InvoiceItem.propTypes = {
    stt: PropTypes.number,
    id: PropTypes.string,
    total: PropTypes.number,
    orderSituation: PropTypes.string,
    listProduct: PropTypes.array,
    createdDate: PropTypes.string,
};

InvoiceItem.defaultProps = {
    stt: 0,
    id: "",
    total: 0,
    orderSituation: "Pending",
    listProduct: [],
    createdDate: "2021-05-10"
}

function InvoiceItem(props) {
    const {
        stt,
        id,
        total,
        orderSituation,
        createdDate,
        listProduct
    } = props

    const renderInvoiceStatus = () =>{
        switch(orderSituation){
            case 'Pending':
                return "Đang xử lý"
            default:
                return
        }
    }

    const renderProductTitle = () =>{
        let strTitle = ""
        for(let item of listProduct){
            strTitle += item.title + ", "
        }

        return strTitle.slice(0, strTitle.length - 2)
    }

    const renderDate = () =>{
        const date = standardDateTime(createdDate)
        return date.date + "." + date.month + "." + date.year
    }

    return (
        <div className = "d-table-row invoice--item">
            <div className = "invoice-id">
                <NavLink to = {`/my-account/invoice-detail/${id}`}>{stt + 1}</NavLink>
            </div>
            <div className = "invoice-date">{renderDate()}</div>
            <div className = "invoice-prod">{renderProductTitle()}</div>
            <div className = "invoice-total">{standardPrice(total)} ₫</div>
            <div className = "invoice-status">
                {renderInvoiceStatus()}
            </div>
        </div>
    );
}

export default InvoiceItem;