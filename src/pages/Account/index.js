import React, { Component } from 'react';
import './style.scss';

import Breadcrumb from '../../commons/components/Breadcrumb'
import MainPage from '../../commons/components/MainPage'
import AccountSidebar from './AccountSidebar';
import AccountInfomation from './AccountInfomation';
import AccountListInvoice from './AccountListInvoice';
import AccountInvoiceDetail from './AccountInvoiceDetail';
import AccountListAddress from './AccountListAddress';
import AccountAddress from './AccountAddress';
import AccountListProduct from './AccountListProduct';

export default class AccountPage extends Component {

    showAccountContent = (alias) =>{
        switch (alias) {
            case 'invoice':
                return ( <AccountListInvoice/> )
            case 'address':
                return ( <AccountListAddress/> )
            case 'add-address':
                return ( <AccountAddress isUpdate = {false}/>)
            case 'update-address':
                return ( <AccountAddress isUpdate = {true}/>)

            case 'favorite':
            case 'commented':
            case 'readed':
            case 'save-for-later':
                return ( <AccountListProduct title = {alias}/> )
            default:
                return (  <AccountInfomation/> )
        }
    }


    render() {
        console.log("url", this.props);
        
        return (
            <MainPage>
                <Breadcrumb mainTitle = "My Account"/>
                
                <div class="cf-container d-flex-between align-start account-page">
                    <AccountSidebar/>
                    <div className="main-page__content account__container">
                        <div className="account__container--widget">
                            {/* <AccountInfomation/> */}
                            {/* <AccountListInvoice/> */}
                            {/* <AccountInvoiceDetail/> */}
                            {/* <AccountListAddress/> */}
                            {/* <AccountAddress/> */}
                            {/* <AccountListProduct/> */}
                        </div>
                    </div>
                </div>

            </MainPage>
        )
    }
}
