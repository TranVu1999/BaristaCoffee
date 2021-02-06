import React, { Component } from "react";
import "./style.scss";
import AccountSidebar from "./Sidebar";
import AccountInvoice from "./Invoice";
import AccountAddress from "./Address";
import AccountLstProduct from "./LstProduct";
import AccountAddAddress from "./AddAddress";
import AccountInvoiceDetail from "./InvoiceDetail";
import FormAccountInfo from "../../features/FormAccountInfo";

export default class AccountContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            windowWidth : document.body.offsetWidth
        }
    }

    showAccountContent = () =>{
        const {alias} = this.props;
        switch (alias) {
            case 'invoice':
                return ( <AccountInvoice/> )
            case 'address':
                return ( <AccountAddress/> )
            case 'invoice-detail':
                return ( <AccountInvoiceDetail/>)
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
        const {windowWidth} = this.state;
        if(windowWidth < 768){
            return (<AccountSidebar />);
        }

        return (
            <>
                <AccountSidebar />
                <div className="main-page__content account__container">
                    <div className="account__container--widget">
                        {this.showAccountContent()}
                    </div>
                </div>
            </>
        )
    }



    render() {
        console.log("get width", document.body.offsetWidth);
        return (
        <div className="cf-container d-flex-between align-start account-page">
            {this.renderHTML()}
            
        </div>
        );
    }

    componentDidMount(){
        const {windowWidth} = this.state;
        console.log("get width compo", windowWidth); 
    }
}
