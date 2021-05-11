import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import './style.scss'

import According from './../../../commons/components/According'

import {standardDateTime} from './../../../commons/js/helpers'

AccountNotify.propTypes = {
    
};

function AccountNotify(props) {

    const notifies = useSelector(state => state.accountReducer.notifies)

    const [listNotify, setListNotify] = useState([]) 
    const [attention, setAttention] = useState({ promotion: false, invoice: false, system: false})

    const [currentTab, setCurrentTab] = useState(0)

    useEffect(() => {
        setListNotify(notifies)
        renderAttention()
    }, [notifies])

    const renderDateTime = str =>{
        let resStr = ""
        const d = standardDateTime(str)
        
        resStr = d.date + "." + d.month + "." + d.year
        return resStr
    }

    const onHandleReadNotify = notifyId =>{

    }

    const onHandleRemoveNotify = notifyId =>{

    }
    

    const renderNotify = () =>{
        if(listNotify.length > 0){
            return listNotify.map((item, index) =>{
                return (
                    <div className="notify-item" key = {index}>
                        <div className="time">{renderDateTime(item.createdDate)}</div>
                        <div 
                            className= {`icon ${item.typeNotify}`}
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
                                item.new ? 
                                    <button 
                                        className="tick"
                                        onClick = {() => onHandleReadNotify(item._id)}
                                    >Đánh dấu đã đọc</button> 
                                : null
                            }
                            <button 
                                className="remove"
                                onClick = {() => onHandleRemoveNotify(item._id)}
                            >Xóa</button>
                        </div>
                    </div>
                )
            })
        }

        return (
            <According>
                <div className="accordition-toggle--box empty-icon">
                    <div className = "accordition-span">
                        <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                        <p>Bạn chưa có thông báo</p>
                        <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                    </div>
                </div>
            </According>
        )
    }

    const onHandleChooseTab = indexTab =>{
        
        let listNotifyShow = []
        if(indexTab === 0){
            listNotifyShow = [...notifies]
        }else if(indexTab === 1){
            listNotifyShow = notifies.filter(item => item.typeNotify === "promotion")
        }else if(indexTab === 2){
            listNotifyShow = notifies.filter(item => item.typeNotify === "invoice")
        }else if(indexTab === 3){
            listNotifyShow = notifies.filter(item => item.typeNotify === "system")
        }

        console.log({listNotifyShow})
        setListNotify(listNotifyShow)
        setCurrentTab(indexTab)
    }

    const renderAttention = () =>{
        let flagSystem = false, flagPromotion = false, flagInvoice = false

        // check system notifies
        for(let item of notifies){
            if(item.typeNotify === 'system' && item.new){
                flagSystem = true
                break
            }
        }

        // check promotion notifies
        for(let item of notifies){
            if(item.typeNotify === 'promotion' && item.new){
                flagPromotion = true
                break
            }
        }

        // check invoice notifies
        for(let item of notifies){
            if(item.typeNotify === 'invoice' && item.new){
                flagInvoice = true
                break
            }
        }

        setAttention({
            promotion: flagPromotion,
            invoice: flagInvoice,
            system: flagSystem
        })
    }

    return (
        <div className="account-content--box">
            <span className="account__title">Thông báo của tôi</span>
            <div className="account__content">
                <div class="account__notify">
                    <div className="d-flex-start tab-notify">
                        <div 
                            className= {currentTab === 0 ? "tab-item active" : "tab-item"}
                            onClick = {() => onHandleChooseTab(0)}
                        >
                            <span aria-hidden="true" className="icon_house" />
                            {attention.promotion || attention.invoice || attention.system ? <strong /> : null}
                        </div>

                        <div 
                            className= {currentTab === 1 ? "tab-item active" : "tab-item"}
                            onClick = {() => onHandleChooseTab(1)}
                        >
                            <span aria-hidden="true" className="icon_gift_alt" />
                            {attention.promotion ? <strong /> : null}
                            
                        </div>

                        <div 
                            className= {currentTab === 2 ? "tab-item active" : "tab-item"}
                            onClick = {() => onHandleChooseTab(2)}
                        >
                            <span aria-hidden="true" className="icon_cart_alt" />
                            {attention.invoice ? <strong /> : null}
                        </div>

                        <div 
                            className= {currentTab === 3 ? "tab-item active" : "tab-item"}
                            onClick = {() => onHandleChooseTab(3)}
                        >
                            <span aria-hidden="true" className="icon_clock_alt" />
                            {attention.system ? (<strong></strong>) : ""}
                            
                        </div>
                    </div>
                    <div className="list-notify">
                        {renderNotify()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountNotify;