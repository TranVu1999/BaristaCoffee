import React, { Component } from "react";
import "./style.scss";
import AccountSidebar from "./Sidebar";
import AccountInfoForm from "./Infoform";
import AccountInvoice from "./Invoice";
import AccountAddress from "./Address";
import AccountLstProduct from "./LstProduct";

export default class AccountContainer extends Component {

    showAccountContent = () =>{
        const {alias} = this.props;
        switch (alias) {
            case 'info':
                return ( <AccountInfoForm/> )
            case 'invoice':
                return ( <AccountInvoice/> )
            case 'address':
                return ( <AccountAddress/> )
            case 'favorite':
            case 'commented':
            case 'readed':
            case 'save-for-later':
                return ( <AccountLstProduct title = {alias}/> )
        
            default:
                return (  <AccountInfoForm/> )
        }

    }

    render() {

        return (
        <div className="cf-container d-flex-between align-start account-page">
            <AccountSidebar />
            <div className="main-page__content account__container">
                <div className="account__container--widget">
                    {this.showAccountContent()}
                </div>
            </div>
        </div>
        );
    }
}
