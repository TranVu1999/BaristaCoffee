import React, { Component } from 'react';
import './style.scss'

export default class AccountNotify extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab: 0
        }
    }

    onHandleChooseTab = index =>{

        this.setState({
            ...this.state,
            tab: index
        })
    }

    render() {
        const {tab} = this.state;

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
                                <strong />
                            </div>

                            <div 
                                className= {tab === 1 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(1)}
                            >
                                <span aria-hidden="true" className="icon_gift_alt" />
                                <strong />
                            </div>

                            <div 
                                className= {tab === 2 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(2)}
                            >
                                <span aria-hidden="true" className="icon_cart_alt" />
                                <strong />
                            </div>

                            <div 
                                className= {tab === 3 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(3)}
                            >
                                <span aria-hidden="true" className="icon_clock_alt" />
                                <strong />
                            </div>
                        </div>
                        <div className="list-notify">
                            <div className="notify-item">
                                <div className="time">
                                    12.10.2020
                                </div>
                                <div className="icon system">
                                    <span aria-hidden="true" className="icon_clock_alt" />
                                </div>
                                <div className="content">
                                    Hãy thay đổi mật khẩu thường xuyên để nâng cao bảo mật. Ngoài ra: 1) Không nên sử dụng chung mật khẩu của email với mật khẩu của các tài khoản khác. 2) Luôn đăng xuất khỏi các tài khoản sau khi sử dụng trên thiết bị công cộng hoặc thiết bị không phải của bản thân.
                                </div>
                                <div className="control">
                                    <button className="tick">Đánh dấu đã đọc</button>
                                    <button className="remove">Xóa</button>
                                </div>
                            </div>

                            <div className="notify-item">
                                <div className="time">
                                    12.10.2020
                                </div>
                                <div className="icon invoice">
                                    <span aria-hidden="true" className="icon_cart_alt" />
                                </div>
                                <div className="content">
                                    Hãy thay đổi mật khẩu thường xuyên để nâng cao bảo mật. Ngoài ra: 1) Không nên sử dụng chung mật khẩu của email với mật khẩu của các tài khoản khác. 2) Luôn đăng xuất khỏi các tài khoản sau khi sử dụng trên thiết bị công cộng hoặc thiết bị không phải của bản thân.
                                </div>
                                <div className="control">
                                    <button className="tick">Đánh dấu đã đọc</button>
                                    <button className="remove">Xóa</button>
                                </div>
                            </div>
                            <div className="notify-item">
                                <div className="time">
                                    12.10.2020
                                </div>
                                <div className="icon promotion">
                                    <span aria-hidden="true" className="icon_gift_alt" />
                                </div>
                                <div className="content">
                                    Hãy thay đổi mật khẩu thường xuyên để nâng cao bảo mật. Ngoài ra: 1) Không nên sử dụng chung mật khẩu của email với mật khẩu của các tài khoản khác. 2) Luôn đăng xuất khỏi các tài khoản sau khi sử dụng trên thiết bị công cộng hoặc thiết bị không phải của bản thân.
                                </div>
                                <div className="control">
                                    <button className="remove">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
