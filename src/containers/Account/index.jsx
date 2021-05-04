import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../commons/components/Breadcrumb'
import {useSelector} from 'react-redux'

import './style.scss'
import Sidebar from '../../features/Account/Sidebar';
import AccountInfomation from '../../features/Account/AccountInfomation';

AccountPage.propTypes = {
    
};

function AccountPage(props) {
    const accountInfo = useSelector(state => state.accountReducer)

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

    return (
        <section className="main-page">
            <Breadcrumb title="My Account"/>
            
            <div class="cf-container d-flex-between align-start account-page">
                <Sidebar
                    username = {accountInfo.username.slice(0, accountInfo.username.indexOf('@'))}
                    numNotify = {getNumNew(accountInfo.notifies)}
                    numInvoice = {getNumNew(accountInfo.invoices)}
                    numFavorite = {getNumNew(accountInfo.productFavorites)}
                    numReaded = {getNumNew(accountInfo.productReads)}
                    numSaveForLate = {getNumNew(accountInfo.productSaveForLates)}
                    numCommented = {getNumNew(accountInfo.productComments)}
                />

                <div className="main-page__content account__container">
                    <div className="account__container--widget">
                        <AccountInfomation />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountPage;