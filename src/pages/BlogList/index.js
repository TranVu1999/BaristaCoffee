import React, { Component } from 'react';
import Banner from '../../commons/components/Banner';
import MainPage from '../../commons/components/MainPage';
import Navigation from '../../commons/components/Navigation';
import BlogSidebar from './BlogSidebar';

export default class BlogListPage extends Component {
    render() {
        return (
            <>
                <Banner bannerTitle = "Blog List" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className="d-flex-between align-start  post-list-page">
                            <div className="main-page__content post-list__content">
                                
                            </div>

                            <div className="main-page__sidebar">
                                <BlogSidebar/>
                            </div>
                        </div>
                        
                    </div>
                </MainPage>

                <Navigation/>
            </>
        )
    }
}
