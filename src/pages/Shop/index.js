import React, { Component } from 'react';
import axios from 'axios';

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
            lstTopRated: [],
            lstProductCate: [],
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
                ...this.state,
                isLoading: false,
                pageActive: data.page,
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
        const {
            amount, 
            lstProduct, 
            pageActive, 
            isLoading, 
            lstProductCate,
            lstTopRated
        } = this.state;

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
                                <ShopSidebar 
                                    lstProductCate = {lstProductCate}
                                    lstTopRated = {lstTopRated}
                                />
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
        let data = {page: this.state.pageActive, sortBy: this.state.sortBy}
        const requestShop = api.post(`/${ApiUrl.SHOP}/`, data);

        data = {page: this.state.pageActive, sortBy: 1}
        const requestShopTopRated = api.post(`/${ApiUrl.SHOP}/`, data);
        const requestProductCate = api.get(`/product-category`);

        axios.all([requestShop, requestShopTopRated, requestProductCate])
        .then(
            axios.spread((...responses) =>{
                const resShop = responses[0];
                const resProductCate = responses[2];
                const resTopRated = responses[1];
                

                this.setState({
                    ...this.state,
                    lstTopRated: [...resTopRated.data.lstProduct],
                    lstProductCate: [...resProductCate.data],
                    isLoading: false,
                    pageActive: data.page,
                    amount: resShop.data.amount,
                    lstProduct: [...resShop.data.lstProduct]
                })
            })
        )
        .catch(err =>{
            console.log("err", err);
        })    
    }
}
