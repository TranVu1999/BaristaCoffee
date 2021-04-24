import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import BannerFull from '../../commons/components/BannerFull';
import './style.scss'

import ListProduct from '../../features/Layout/ListProduct'
import ProductThumb from '../../features/ProductDetail/ProductThumb'
import ProductSummary from '../../features/ProductDetail/ProductSummary'
import ProductTab from '../../features/ProductDetail/ProductTab'

import axios from 'axios'
import api from './../../api'
import InfomationStore from '../../features/ProductDetail/InfomationStore';


function ProductDetailPage(props) {
    const listKeySearch = useSelector(state => state.keySearchReducer)

    const [productId, setProductId] = useState("")
    const [product, setProduct] = useState({})

    useEffect(() => {
        if(props.match){
            const requestProduct = api.get(`product/detail/${props.match.params.alias}`)
            axios.all([requestProduct])
            .then(
                axios.spread((...responses) =>{
                    const resProductFilter = responses[0].data
                    if(resProductFilter.success){
                        setProduct(resProductFilter.product)
                        setProductId(resProductFilter.product._id)
                    }
                })
            )
            .catch(err =>{
                console.log(err)
            })
        }
    }, [])

    useEffect(() =>{
        
        if(listKeySearch.key.length > 0 && productId){
            const data = {
                key: listKeySearch.key,
                accessToken: listKeySearch.accessToken,
                productId: productId
            }

            api.post('key-map/add', data)
            .then(res =>{})
            .catch(err =>{console.log(err)})
        }
        
    }, [productId])

    return (
        <>
            <BannerFull
                title="Product detail"
                img="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"
            />

            <section className="main-page">
                <div className="cf-container">
                    <div className="product-detail">
                        <div className="product-detail__content">
                            <div className="d-flex-start align-start">
                                <ProductThumb 
                                    listImage = {product.moreImage}
                                />
                                
                                <ProductSummary
                                    title = {product.title}
                                    rating = {product.rating}
                                    promo = {product.promo}
                                    price ={product.price}
                                    shortDescription = {product.shortDescription}
                                    sku = {product.sku}
                                    productCategory = {product.productCategory}
                                    numComment = {product.comment && product.comment.length}
                                />
                            </div>

                            <InfomationStore/>

                            <ProductTab
                                detail = {product.detail}
                                width = {product.width}
                                height = {product.height}
                                weight = {product.weight}
                                length = {product["length"]}
                                listComment = {product.comment}
                            />
                        </div>

                        <h3 className = "mb-30">related products</h3>
                        <ListProduct 
                            cols = {4}
                            listProduct = {product.listRelativeProduct}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetailPage;