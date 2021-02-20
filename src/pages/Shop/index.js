import React, { Component } from 'react';
import Banner from '../../commons/components/Banner';
import MainPage from '../../commons/components/MainPage';
import Navigation from '../../commons/components/Navigation';
import ShopProduct from './ShopProduct';
import ShopSidebar from './ShopSidebar';
import ShopControl from './ShopControl';

export default class ShopPage extends Component {
    render() {
        return (
            <>
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className="d-flex-between align-start shop-page">
                            <div className="main-page__content">
                                <ShopControl/>
                                <ShopProduct/>
                            </div>

                            <div className="main-page__sidebar">
                                <ShopSidebar/>
                            </div>
                        </div>
                        
                    </div>
                </MainPage>

                <Navigation/>
            </>
        )
    }
}
