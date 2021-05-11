import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../commons/components/Breadcrumb'
import {useSelector, useDispatch} from 'react-redux'

import './style.scss'
import Sidebar from '../../features/Account/Sidebar';
import AccountInfomation from '../../features/Account/AccountInfomation';
import {standardDateTime} from './../../commons/js/helpers'
import AccountNotify from '../../features/Account/AccountNotify';
import AccountListAddress from '../../features/Account/AccountListAddress';
import AccountAddAddress from '../../features/Account/AccountAddAddress';
import AccountListInvoice from '../../features/Account/AccountListInvoice';

import {actUpdateUrl} from './../../commons/modules/Url/actions'
import AccountInvoiceDetail from '../../features/Account/AccountInvoicedetail';

AccountPage.propTypes = {
    
};

function AccountPage(props) {
    const username = useSelector(state => state.accountReducer.username)
    const notifies = useSelector(state => state.accountReducer.notifies)
    const invoices = useSelector(state => state.accountReducer.invoices)
    const productFavorites = useSelector(state => state.accountReducer.productFavorites)
    const productReads = useSelector(state => state.accountReducer.productReads)
    const productSaveForLates = useSelector(state => state.accountReducer.productSaveForLates)
    const productComments = useSelector(state => state.accountReducer.productComments)

    const dispatch = useDispatch()

    // Update url
    useEffect(() =>{
        const {url, params} = props.match
        dispatch(actUpdateUrl({
            url, params
        }))
    }, [props.match])

    const getNumNew = (arr) =>{
        let total = 0
        if(arr){
            for(let item of arr){
                if(item.isNew){
                    total++
                }
            }
        }

        return total;
    }

    const renderAccountContent = () =>{
        const {accountContent} = props.match.params

        switch (accountContent){
            case 'infomation':
                return <AccountInfomation />

            case 'notify':
                return <AccountNotify/>

            case 'address':
                return <AccountListAddress/>

            case 'add-address':
                return <AccountAddAddress/>

            case 'invoice':
                return <AccountListInvoice/>

            case 'invoice-detail':
                return <AccountInvoiceDetail/>



            default: 
                break
        }
    }

    return (
        <section className="main-page">
            <Breadcrumb title="My Account"/>
            
            <div class="cf-container d-flex-between align-start account-page">
                <Sidebar
                    username = {username.slice(0, username.indexOf('@'))}
                    numNotify = {getNumNew(notifies)}
                    numInvoice = {getNumNew(invoices)}
                    numFavorite = {getNumNew(productFavorites)}
                    numReaded = {getNumNew(productReads)}
                    numSaveForLate = {getNumNew(productSaveForLates)}
                    numCommented = {getNumNew(productComments)}
                />

                <div className="main-page__content account__container">
                    <div className="account__container--widget">{renderAccountContent()}</div>
                </div>
            </div>
        </section>
    );
}

export default AccountPage;