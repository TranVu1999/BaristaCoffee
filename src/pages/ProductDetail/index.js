import React, { Component } from 'react'
import './style.scss';

import Banner from '../../commons/components/Banner'
import MainPage from '../../commons/components/MainPage'
import ProductThumb from './ProductThumb'
import ProductSummary from './ProductSummary';

import {connect} from 'react-redux';
import {actProductDetailApi} from './modules/actions';

class ProductDetailPage extends Component {

    render() {
        console.log("product detail page", this.props.prodInfo);
        
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)
