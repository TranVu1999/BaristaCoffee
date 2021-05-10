import React from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';

InvoiceItem.propTypes = {
    id: PropTypes.string,
    total: PropTypes.number,
    orderSituation: PropTypes.string,
};

InvoiceItem.defaultProps = {
    id: "",
    total: 0,
    orderSituation: "Pending"
}

function InvoiceItem(props) {
    const {
        id,
        total,
        orderSituation
    } = props

    const renderInvoiceStatus = () =>{

    }

    const renderProductTitle = () =>{

    }

    const renderDate = () =>{

    }

    return (
        <div className = "d-table-row invoice--item">
            <div className = "invoice-id">
                <NavLink to = {`/my-account/invoice-detail/${id}`}>{id}</NavLink>
            </div>
            <div className = "invoice-date">{renderDate()}</div>
            <div className = "invoice-prod">{renderProductTitle()}</div>
            <div className = "invoice-total">{total} ₫</div>
            <div className = "invoice-status">
                {renderInvoiceStatus()}
            </div>
        </div>
    );
}

export default InvoiceItem;