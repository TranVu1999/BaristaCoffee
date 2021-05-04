import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'

AccountNotify.propTypes = {
    
};

function AccountNotify(props) {

    const notifies = useSelector(state => state.accountReducer.notifies)
    
    

    const [attention, setAttention] = useState({
        promotion: false,
        invoice: false,
        system: false
    })
    const [currentTab, setCurrentTab] = useState(0)

    const renderNotify = () =>{

    }

    const onHandleChooseTab = indexTab =>{
        setCurrentTab(indexTab)
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
                            {attention.system ? <strong /> : null}
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