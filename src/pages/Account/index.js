import React, { Component } from 'react';
import './style.scss';

import Breadcrumb from '../../commons/components/Breadcrumb'
import MainPage from '../../commons/components/MainPage'
import AccountSidebar from './AccountSidebar'

export default class AccountPage extends Component {
    render() {
        return (
            <MainPage>
                <Breadcrumb mainTitle = "My Account"/>
                
                <div className = "cf-container">
                    <AccountSidebar/>
                </div>

            </MainPage>
        )
    }
}
