import React, { Component } from 'react';
import Banner from '../../commons/components/Banner';
import MainPage from '../../commons/components/MainPage';
import Navigation from '../../commons/components/Navigation';
import ShopProduct from './ShopProduct';
import ShopSidebar from './ShopSidebar';
import ShopControl from './ShopControl';

import api from './../../api';
import * as ApiUrl from './../../commons/constant/ApiUrl';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageActive: 0,
            amount: 0,
            lstProduct: []
        }
    }

    render() {
        const {amount, lstProduct, pageActive} = this.state;

        return (
            <>
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className="d-flex-between align-start shop-page">
                            <div className="main-page__content">
                                <ShopControl amount = {amount}/>
                                <ShopProduct lstProduct = {lstProduct}/>
                            </div>

                            <div className="main-page__sidebar">
                                <ShopSidebar/>
                            </div>
                        </div>
                        
                    </div>
                </MainPage>

                <Navigation amount = {amount} per = "9" pageActive= {pageActive}/>
            </>
        )
    }

    componentDidMount(){
        const data = {page: 0}

        api.post(`/${ApiUrl.SHOP}/`, data)
        .then(res =>{
            this.setState({
                pageActive: 0,
                amount: res.data.amount,
                lstProduct: [...res.data.lstProduct]
            })
        })
        .catch(err =>{
            console.log("err", err);
        })
    }
}
