import React, { Component } from 'react';
import './style.scss';
import axios from 'axios';

class AccountInvoiceDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            invoiceDetail: {
                invoiceId: "",
                status: "finish",
                createdate: "",
                receivedName: "admin",
                address: "",
                phone: "",
                chargeShip: "",
                listProduct: []
            }
        }
    }

    renderInvoiceStatus = (status) =>{
        switch(status){
            default: 
                return "Giao hàng thành công"
        }
    }

    renderListProduct = (listProduct) =>{
        return listProduct.map((item, index) =>{
            return (
                <div key = {index} className="d-flex-between product-item">
                    <div className="widget widget-product">
                        <div className="product-thumb">
                            <img src={item.productAvatar} alt="product" />
                        </div>
                        <div className="product-text">
                            <h5><a href="/#">{item.productTitle}</a></h5>

                        <div className="product-rate">
                        <div 
                            className="product-rate--overlay" 
                            style={{width: 100 - item.productRating + "%"}} 
                        />
                            <span className="icon icon-star-full" />
                            <span className="icon icon-star-full" />
                            <span className="icon icon-star-full" />
                            <span className="icon icon-star-full" />
                            <span className="icon icon-star-full" />
                        </div>
                        <div>
                            <a href="/#" className="btn">Viết nhận xét</a>
                            <a href="/#" className="btn">Mua lại</a>
                        </div>
                    </div>

                    </div>
                    <div className="widget widget-price">{item.productPrice} $</div>
                    <div className="widget widget-amount">{item.amount}</div>
                    <div className="widget widget-promo">0 $</div>
                    <div className="widget widget-provisional">
                        {item.productPrice * item.amount} .00$
                    </div>
                </div>
            )
        })
    }

    render() {
        const {invoiceDetail} = this.state;
        console.log("invoice detail", invoiceDetail)

        return (
            <div className="account__container--widget">
                <span className="account__title">Chi tiết đơn hàng</span>

                <div className="bg-white account__content">
                    <div className="invoice-detail">
                        <div className="d-flex-between invoice-detail--top">
                            <div>
                                <span className="invoice-id">
                                    #{invoiceDetail.invoiceId}</span> - 
                                    {this.renderInvoiceStatus(invoiceDetail.status)}
                            </div>
                            <div>
                                <span className="invoice-date">Ngày đặt hàng: </span>
                                {invoiceDetail.createdate}
                            </div>
                        </div>

                        <div className="d-flex-between align-start invoice-detail__info">
                            <div className="invoide-widget">
                                <h5>Địa chỉ người nhận</h5>
                                <p className="customer-name">
                                    {invoiceDetail.receivedName}
                                </p>
                                <p>Địa chỉ: {invoiceDetail.address}</p>
                                <p>Điện thoại: {invoiceDetail.phone}</p>
                            </div>

                            <div className="invoide-widget">
                                <h5>Hình thức giao hàng</h5>
                                <p>Giao vào Chủ nhật, 10/01</p>
                                <p>Phí vận chuyển: {invoiceDetail.chargeShip}đ</p>
                            </div>

                            <div className="invoide-widget">
                                <h5>Hình thức thanh toán</h5>
                                <p>Thanh toán tiền mặt khi nhận hàng</p>
                            </div>
                        </div>

                        <div className="invoice-detail__content">
                            <div className="d-flex-between invoide-detail__head">
                                <div className="widget widget-product">Sản phẩm</div>
                                <div className="widget widget-price">Giá</div>
                                <div className="widget widget-amount">Số lượng</div>
                                <div className="widget widget-promo">Giảm giá</div>
                                <div className="widget widget-provisional">Tạm tính</div>
                            </div>

                            <div className="invoice-detail__body">
                                {this.renderListProduct(invoiceDetail.listProduct)}
                            </div>

                            <div className="invoide-detail__footer">
                                <div className="d-flex-between">
                                    <div className="widget-space" />
                                    <div className="widget-label">
                                    Tạm tính
                                    </div>
                                    <div className="widget-total">
                                    199.659 ₫
                                    </div>
                                </div>
                                <div className="d-flex-between">
                                    <div className="widget-space" />
                                    <div className="widget-label">
                                    Phí vận chuyển
                                    </div>
                                    <div className="widget-total">
                                    0 ₫
                                    </div>
                                </div>
                                <div className="d-flex-between">
                                    <div className="widget-space" />
                                    <div className="widget-label">
                                    Tổng cộng
                                    </div>
                                    <div className="widget-total">
                                    <span className="total-price">199.659 ₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const {invoiceId} = this.props;
        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"))
        if(accountInfo && invoiceId){
            axios.get(
                `http://localhost:9000/invoice/${accountInfo.accountId}/${invoiceId}`
            )
            .then(res =>{
                this.setState({
                    invoiceDetail: {...res.data}
                })
            })
            .catch(err =>{
                console.log("err", err)
            })
        }
        
    }
}

export default AccountInvoiceDetail
