import React, {useState, useEffect} from 'react';
import BannerFull from '../../commons/components/BannerFull';
import ListProduct from '../../features/Layout/ListProduct';
import MallControl from '../../features/Mall/MallControl';
import './style.scss'

import aixos from 'axios'
import api from './../../api'
import Navigation from '../../features/Layout/Navigation';
import SidebarWidget from '../../commons/components/SidebarWidget';
import Search from '../../features/Layout/Search';
import ListTag from '../../commons/components/ListTag';
import axios from 'axios';


function MallPage(props) {
    const [sizeList, setSizeList] = useState(0)
    const [listProduct, setListProduct] = useState([])
    const [listProductCategory, setListProductCategory] = useState([])
    const [filter, setFilter] = useState({
        page: 1,
        perPage: 9,
        sortBy: "Sort by lastest",
        productCategory: "All"
    })

    useEffect(() =>{
        const requestProductFilter = api.post('product/filter', filter)
        const requestProductCategory = api.get('product-category')

        aixos.all([requestProductFilter, requestProductCategory])
        .then(
            axios.spread((...responses) =>{
                const resProductFilter = responses[0].data
                const resProductCategory = responses[1].data

                // set list product
                if(resProductFilter.success){
                    setSizeList(resProductFilter.sizeList)
                    setListProduct(resProductFilter.listProduct)
                }

                // set list product category
                if(resProductCategory.success){
                    let listProdCate = resProductCategory.listProdCate.map(item => item.title)

                    setListProductCategory(listProdCate)
                }
            })
        )
        .catch(err =>{
            console.log(err)
        })

    }, [filter])

    const onHandleChoseSort = (sortType) =>{
        setFilter({
            ...filter,
            sortBy: sortType
        })
    }

    const onHandleChosePage = (indexPage) =>{
        if(indexPage !== filter.page){
            setFilter({
                ...filter,
                page: indexPage
            })
        }
        
    }

    const onHandleGetProductCategory = (prodCateTitle) =>{
        console.log({prodCateTitle})

        setFilter({
            ...filter,
            productCategory: prodCateTitle
        })
    }

    return (
        <>
            <BannerFull 
                title="Mall"
                img="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"
            />

            <section className="main-page">
                <div className="cf-container">
                    <div className="mall-page">
                        <div className="main-page__content">
                            <MallControl
                                sizeList = {sizeList}
                                onChoseSort = {onHandleChoseSort}
                            />

                            <ListProduct
                                listProduct = {listProduct}
                            />

                            <Navigation
                                activePage = {filter.page}
                                perPage = {filter.perPage}
                                sizeList = {sizeList}
                                onChosePage = {onHandleChosePage}
                            />
                        </div>
                        
                        <div className="main-page__sidebar">
                            <SidebarWidget
                                title="Search"
                            >
                                <Search/>
                            </SidebarWidget>

                            <SidebarWidget
                                title="Tags"
                            >
                                <ListTag 
                                    activeTag = {filter.productCategory}
                                    listTag = {listProductCategory}
                                    onGetProductCategory = {onHandleGetProductCategory}
                                />
                            </SidebarWidget>

                            <SidebarWidget>
                                <a href="/#" className="advertisement">
                                    <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-sidebar-widget_maxrzx.jpg" alt="advertisement"/>
                                </a>
                            </SidebarWidget>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MallPage;