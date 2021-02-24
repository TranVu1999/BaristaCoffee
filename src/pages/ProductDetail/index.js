import React, { Component } from 'react'
import './style.scss';

import Banner from '../../commons/components/Banner'
import MainPage from '../../commons/components/MainPage'
import ProductThumb from './ProductThumb'

import api from './../../api';
import axios from 'axios';
import ProductSummary from './ProductSummary';

export default class ProductDetailPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            productDetail: {
                
            }
        }
    }

    render() {
        const {productDetail} = this.state;
        const {productImage} = productDetail;

        return (
            <>
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className = "product-detail">
                            <div className="product-detail__content">
                                <div className="d-flex-between align-start">
                                    <ProductThumb productImage = {productImage}/>
                                    <ProductSummary productInfo = {productDetail}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainPage>
            </>
        )
    }

    componentDidMount(){
        const {prodAlias} = this.props.match.params;
        console.log("prod alias", prodAlias);

        const reqProductDetail = api.get(`/product/${prodAlias}`);

        axios.all([reqProductDetail])
        .then(
            axios.spread((...responses) =>{
                const resProductDetail = responses[0];

                this.setState({
                    ...this.state,
                    productDetail: resProductDetail.data
                })
            })
        )
        .catch(err =>{
            console.log("err", err);
        })    
    }
}
