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

import {connect} from 'react-redux';
import {actAccountInfoApi} from './../../commons/modules/AccountInfo/actions';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class AccountPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabTitle: ''
        }
    }

    showAccountContent = () =>{
        const {tabTitle} = this.state;
        if(tabTitle){
            const {accountProduct} = this.props.accountInfo;
            switch (tabTitle.accountTab) {
                case 'invoice':
                    return ( <AccountListInvoice/> )
                case 'address':
                    return ( <AccountListAddress/> )
                case 'add-address':
                    return ( <AccountAddress isUpdate = {false}/>)
                case 'update-address':
                    return ( <AccountAddress isUpdate = {true}/>)
                case 'favorite':
                    return ( <AccountListProduct title = {tabTitle.accountTab}/> )
                case 'commented':
                    return ( <AccountListProduct title = {tabTitle.accountTab}/> )
                case 'readed':
                    return ( <AccountListProduct 
                        title = {tabTitle.accountTab} 
                        listProduct = {accountProduct.readed}
                    /> )
                case 'save-for-later':
                    return ( <AccountListProduct title = {tabTitle.accountTab}/> )
                default:
                    return (  <AccountInfomation/> )
            }
        }

        return null;
    }


    render() {
        return (
            <MainPage>
                <Breadcrumb mainTitle = "My Account"/>
                
                <div class="cf-container d-flex-between align-start account-page">
                    <AccountSidebar/>
                    <div className="main-page__content account__container">
                        <div className="account__container--widget">
                            {this.showAccountContent()}
                            
                        </div>
                    </div>
                </div>

            </MainPage>
        )
    }

    componentDidMount(){

        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        });

        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            
            this.props.onGetData(accountInfo.accountId);
        }else{
            // Truy cập trái phép
            // Chuyển về trang chủ
        }

        // this.props.onGetData()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.match.url && nextProps.urlParams){
            if(nextProps.urlParams !== nextProps.match.params.accountTab){
                return {tabTitle: nextProps.match.params}
            } 
        }
        return null;
        
    }
}

const mapStateToProps = state =>{
    return{
        urlParams: state.urlReducer.urlInfo.params,
        accountInfo: state.accountInfoReducer.accountInfo
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onGetData: accountId =>{
            dispatch(actAccountInfoApi(accountId))
        },
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
