import React, { Component } from 'react'
import './style.scss';

import Banner from '../../commons/components/Banner'
import MainPage from '../../commons/components/MainPage'
import ProductThumb from './ProductThumb'
import ProductSummary from './ProductSummary';

import {connect} from 'react-redux';
import {actProductDetailApi, actDropBylApi} from './modules/actions';
import {actUpdateUrl} from './../../commons/modules/Url/actions';
import ProductTab from './ProductTab';

class ProductDetailPage extends Component {

    render() {  
        let productId = this.props.prodInfo.productId;
        let accountId = JSON.parse(localStorage.getItem("accountInfo")).accountId;
        accountId = accountId ? accountId : "none";
        if(productId){
            this.props.onDropByDetail({
                productId: productId,
                accountId: accountId
            })
        }

        return (
            <>
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className = "product-detail">
                            <div className="product-detail__content">
                                <div className="d-flex-between align-start">
                                    <ProductThumb/>
                                    <ProductSummary/>
                                </div>
                                
                                <ProductTab/>
                            </div>
                        </div>
                    </div>
                </MainPage>
            </>
        )
    }

    componentDidMount(){
        const {prodAlias} = this.props.match.params;
        this.props.fetchData(prodAlias);
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }
}

const mapStateToProps = state =>{
    return {
        prodInfo: state.productDetailReducer.data
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        fetchData: produAlias =>{
            dispatch(actProductDetailApi(produAlias))
        },
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        },
        onDropByDetail: data =>{
            actDropBylApi(data);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)
