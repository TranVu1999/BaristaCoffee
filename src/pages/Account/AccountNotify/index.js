import React, { Component } from 'react';
import './style.scss'

import AccordingToggle from './../../../commons/components/AccordingToggle';
import {NavLink} from 'react-router-dom';

export default class AccountNotify extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab: 0,
            data: [
                {
                    notifyId: 'noti1',
                    createDate: "21.10.2020",
                    type: "system",
                    content: "Hãy thay đổi mật khẩu thường xuyên để nâng cao bảo mật. Ngoài ra: 1) Không nên sử dụng chung mật khẩu của email với mật khẩu của các tài khoản khác. 2) Luôn đăng xuất khỏi các tài khoản sau khi sử dụng trên thiết bị công cộng hoặc thiết bị không phải của bản thân.",
                    isNew: true
                },
                {
                    notifyId: 'noti2',
                    createDate: "15.03.2020",
                    type: "invoice",
                    content: "Tiki.vn đã liên hệ giao lại đơn hàng đến quý khách nhiều lần nhưng không thành công và chưa nhận được phản hồi sau khi gửi email thông báo. Tiki.vn xin phép hủy đơn hàng này. Hy vọng sớm được phục vụ quý khách thành công trong đơn hàng tiếp theo.",
                    isNew: true
                },
                {
                    notifyId: 'noti3',
                    createDate: "07.12.2020",
                    type: "invoice",
                    content: "Tiki.vn liên hệ để giao đơn hàng đến quý khách nhưng không thành công. Nếu quý khách vẫn còn nhu cầu cho đơn hàng này, xin vui lòng liên hệ lại với Tiki.vn qua Hotline 19006035 ( 8h - 21h ) hoặc gửi yêu cầu tại http://hotro.tiki.vn/hc/vi/requests/new trong 24 giờ tới kèm theo thông tin liên lạc phù hợp nhất, Tiki.vn sẽ tiến hành sắp xếp giao lại đơn hàng. Mong sớm nhận hồi âm của quý khách, đơn hàng sẽ tự hủy trong 24 giờ nếu không nhận được hồi âm",
                    isNew: true
                },
                {
                    notifyId: 'noti4',
                    createDate: "24.12.2020",
                    type: "invoice",
                    content: "Tiki gửi lời xin lỗi chân thành vì đơn hàng #428171804 của quý khách sẽ giao trễ hơn dự kiến 4 ngày, chúng tôi sẽ giao hàng cho quý khách vào ngày 04/12/2018",
                    isNew: true
                },
                {
                    notifyId: 'noti5',
                    createDate: "11.09.2020",
                    type: "promotion",
                    content: "Đơn hàng #323864097 đã giao thành công. TIKI tặng bạn mã coupon STA4VEYT8AI trị giá 30.000đ mua sách Tiếng Anh (không bao gồm Dictionary) do Tiki Trading phân phối. HSD đến 15/11/2018null",
                    isNew: true
                },
                {
                    notifyId: 'noti6',
                    createDate: "14.09.2020",
                    type: "promotion",
                    content: "Nhập mã TIKIANKER giảm thêm 20% cho phụ kiện Anker. Thời gian áp dụng từ 06 - 13/9",
                    isNew: true
                }
            ],
            attention: {
                system: true,
                promotion: true,
                invoice: true
            }
        }
    }

    onHandleChooseTab = index =>{
        this.setState({
            ...this.state,
            tab: index
        })
    }

    onHandleReadNotify = (notifyId) =>{
        const {data} = this.state;
        const lengthData = data.length;
        
        for(let i = 0; i < lengthData; i++){
            if(data[i].notifyId === notifyId){
                data[i].isNew = false;
            }
        }

        let attention = this.onGetAttention(data)

        this.setState({
            ...this.state,
            data,
            attention
        })

    }

    onGetAttention = (data) =>{
        let attention = {
            system: false,
            promotion: false,
            invoice: false
        }

        let arrSystem = data.filter(item =>{
            return item.type === 'system' && item.isNew
        })
        attention.system = arrSystem.length > 0;

        let arrPromotion = data.filter(item =>{
            return item.type === 'promotion' && item.isNew
        })
        attention.promotion = arrPromotion.length > 0;

        let arrInvoice = data.filter(item =>{
            return item.type === 'invoice' && item.isNew
        })
        attention.invoice = arrInvoice.length > 0;

        return {...attention};

    }

    onHandleRemoveNotify = notifyId =>{
        let {data} = this.state;
        data = data.filter(item => item.notifyId !== notifyId);
        let attention = this.onGetAttention(data)
        this.setState({
            ...this.state,
            data,
            attention
        })
    }

    onGetTitleTab = (index) =>{
        let tabTitle = '';
        switch(index){                
            case 1: 
                tabTitle = "promotion";
                break;
            case 2: 
                tabTitle = "invoice";
                break;
            case 3: 
                tabTitle = "system";
                break;
            default: 
                tabTitle = "all";
                break;
        }
        return tabTitle;
    }

    renderNotify = () =>{
        // const {show} = this.state;
        const {data, tab} = this.state;
        const titleTab = this.onGetTitleTab(tab);
        let show = [];
        if(titleTab === 'all'){
            show = [...data];
        }else{
            show = data.filter(item => item.type === titleTab)
        }

        if(show.length > 0){
            return show.map((item, index) =>{
                return (
                    <div className="notify-item" key = {index}>
                        <div className="time">
                            {item.createDate}
                        </div>
                        <div 
                            className= {`icon ${item.type}`}
                        >
                            {
                                item.type === 'system' ? (
                                    <span aria-hidden="true" className="icon_clock_alt" />
                                ): item.type === 'promotion' ? (
                                    <span aria-hidden="true" className="icon_gift_alt" /> 
                                ) : (
                                    <span aria-hidden="true" className="icon_cart_alt" />
                                )
                            }
                            
                        </div>
                        <div className="content">
                            {item.content}
                        </div>
                        <div className="control">
                            {
                                item.isNew ? 
                                    <button 
                                        className="tick"
                                        onClick = {() => this.onHandleReadNotify(item.notifyId)}
                                    >Đánh dấu đã đọc</button> 
                                : null
                            }
                            <button 
                                className="remove"
                                onClick = {() => this.onHandleRemoveNotify(item.notifyId)}
                            >Xóa</button>
                        </div>
                    </div>
                )
            })
        }
        

        return (
            <AccordingToggle>
                <div className="accordition-toggle--box empty-icon">
                    <div className = "accordition-span">
                        <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                        <p>Bạn chưa có thông báo</p>
                        <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                    </div>
                </div>
            </AccordingToggle>
        )
    }

    render() {
        const {tab, attention} = this.state;

        return (
            <div className="account-content--box">
                <span className="account__title">Thông báo của tôi</span>
                <div className="account__content">
                    <div class="account__notify">
                        <div className="d-flex-start tab-notify">
                            <div 
                                className= {tab === 0 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(0)}
                            >
                                <span aria-hidden="true" className="icon_house" />
                                {attention.promotion || attention.invoice || attention.system ? <strong /> : null}
                            </div>

                            <div 
                                className= {tab === 1 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(1)}
                            >
                                <span aria-hidden="true" className="icon_gift_alt" />
                                {attention.promotion ? <strong /> : null}
                                
                            </div>

                            <div 
                                className= {tab === 2 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(2)}
                            >
                                <span aria-hidden="true" className="icon_cart_alt" />
                                {attention.invoice ? <strong /> : null}
                            </div>

                            <div 
                                className= {tab === 3 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(3)}
                            >
                                <span aria-hidden="true" className="icon_clock_alt" />
                                {attention.system ? <strong /> : null}
                            </div>
                        </div>
                        <div className="list-notify">
                            {this.renderNotify()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
