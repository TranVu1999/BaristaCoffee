import React, { Component } from "react";
import "./style.scss";
import AccountSidebar from "./Sidebar";
import ListInvoice from "./../../features/ListInvoice";
import AccountAddress from "./Address";
import AccountLstProduct from "./LstProduct";
import AccountAddAddress from "./AddAddress";
// import AccountInvoiceDetail from "./InvoiceDetail";
import FormAccountInfo from "../../features/FormAccountInfo";

export default class AccountContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            windowWidth : document.body.offsetWidth
        }
    }

    showAccountContent = (alias) =>{
        switch (alias) {
            case 'invoice':
                return ( <ListInvoice/> )
            case 'address':
                return ( <AccountAddress/> )
            // case 'invoice-detail':
                // return ( <AccountInvoiceDetail/>)
            case 'add-address':
                return ( <AccountAddAddress isUpdate = {false}/>)
            case 'update-address':
                return ( <AccountAddAddress isUpdate = {true}/>)

            case 'favorite':
            case 'commented':
            case 'readed':
            case 'save-for-later':
                return ( <AccountLstProduct title = {alias}/> )
            default:
                return (  <FormAccountInfo/> )
        }
    }

    renderHTML = () =>{
        const {alias} = this.props;
        const {windowWidth} = this.state;

        // mobile screen
        if(windowWidth < 768){
            if(!alias){
                return (<AccountSidebar />);
            }
            return this.showAccountContent(alias);
            
        }

        // pc screen
        return (
            <>
                <AccountSidebar />
                <div className="main-page__content account__container">
                    <div className="account__container--widget">
                        {this.showAccountContent(alias)}
                    </div>
                </div>
            </>
        )
    }



    render() {
        return (
        <div className="cf-container d-flex-between align-start account-page">
            {this.renderHTML()}
        </div>
        );
    }
}
