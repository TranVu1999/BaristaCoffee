import React, { Component } from 'react';
import Banner from '../../commons/components/Banner';
import MainPage from '../../commons/components/MainPage';
import Navigation from '../../commons/components/Navigation';
import ShopProduct from './ShopProduct';
import ShopSidebar from './ShopSidebar';
import ShopControl from './ShopControl';

import api from './../../api';
import * as ApiUrl from './../../commons/constant/ApiUrl';
import Loading from '../../commons/components/Loading';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 2,
            isLoading: true,
            pageActive: 0,
            amount: 0,
            lstProduct: []
        }
    }

    getDataFromAPI = (data)=>{

        api.post(`/${ApiUrl.SHOP}/`, data)
        .then(res =>{
            this.setState({
                isLoading: false,
                pageActive: data.page,
                amount: res.data.amount,
                lstProduct: [...res.data.lstProduct]
            })
        })
        .catch(err =>{
            console.log("err", err);
        })
    }

    handleChoosePage = (page) =>{
        if(page !== this.state.pageActive){
            const data = {page: page, sortBy: this.state.sortBy};
            this.setState({
                ...this.state,
                isLoading: true,
                pageActive: page
            })

            this.getDataFromAPI(data)
        }
        
    }

    handleSort = (sortBy) =>{
        const data = {page: this.state.pageActive, sortBy}
        this.setState({
            ...this.state,
            sortBy
        }, () =>{
            this.getDataFromAPI(data);
        })
        
    }

    render() {
        const {amount, lstProduct, pageActive, isLoading} = this.state;

        return (
            <>
                
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className="d-flex-between align-start shop-page">
                            <div className="main-page__content">
                                {isLoading 
                                    ? <Loading/>
                                    :(
                                        <>
                                            <ShopControl 
                                                amount = {amount}
                                                onHandleSort = {this.handleSort}
                                            />
                                            <ShopProduct lstProduct = {lstProduct}/>
                                        </>
                                    )
                                }
                            </div>

                            <div className="main-page__sidebar">
                                <ShopSidebar/>
                            </div>
                        </div>
                        
                    </div>
                    <Navigation 
                        amount = {amount} 
                        per = "9" 
                        pageActive= {pageActive}
                        onChoosePage = {this.handleChoosePage}
                    />
                </MainPage>

                
            </>
        )
    }

    componentDidMount(){
        const data = {page: this.state.pageActive, sortBy: this.state.sortBy}
        this.setState({...this.state, isLoading: true}, () =>{
            this.getDataFromAPI(data);
        });
        
    }
}
