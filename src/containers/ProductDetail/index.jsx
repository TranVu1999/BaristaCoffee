import React, {useState, useEffect} from 'react';
import BannerFull from '../../commons/components/BannerFull';
import './style.scss'

import ListProduct from '../../features/Layout/ListProduct'
import ProductThumb from '../../features/ProductDetail/ProductThumb'
import ProductSummary from '../../features/ProductDetail/ProductSummary'
import ProductTab from '../../features/ProductDetail/ProductTab'

import api from './../../api'


function ProductDetailPage(props) {
    const [product, setProduct] = useState({})

    useEffect(() => {
        if(props.match){
            api.get(`product/detail/${props.match.params.alias}`)
            .then(res =>{
                if(res.data.success){
                    setProduct(res.data.product)
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
        console.log(props)
    }, [])

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