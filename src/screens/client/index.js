import React, { Component } from 'react';
import HeaderComponent from './../../components/Header';
import FooterComponent from './../../components/Footer';
import { Route, Switch } from 'react-router-dom';
import AccountScreen from './AccountScreen';
import HomeScreen from './HomeScreen';

export default class ClientScreen extends Component {
    render() {
        return (
            <div className = "main-wrapper">
                <HeaderComponent/>

                <Switch>
                    <Route path = "/my-account/:alias" component = {AccountScreen}/>
                    <Route path = "/" component = {HomeScreen}/>
                </Switch>
                
                <FooterComponent/>
            </div>
        )
    }
}
