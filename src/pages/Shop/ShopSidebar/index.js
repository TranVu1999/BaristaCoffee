import React, { Component } from 'react';
import SidebarWidget from './../../../commons/components/SidebarWidget';
import Search from './../../../commons/components/Search';
import ListProduct from './ListProduct';
import ListTag from './../../../commons/components/ListTag';

export default class ShopSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            lstTopRated: [],
            lstTag: []
        }
    }

    render() {
        const {lstTag, lstTopRated} = this.state;

        return (
            <>
                <SidebarWidget widgetTitle = "Search">
                    <Search/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "TOP RATED PRODUCTS">
                    <ListProduct lstProduct = {lstTopRated.slice(0,3)}/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Tags">
                    <ListTag lstTag = {lstTag}/>
                </SidebarWidget>

                <SidebarWidget>
                    <a href="/#" className="advertisement">
                        <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-sidebar-widget_maxrzx.jpg" alt="advertisement"/>
                    </a>
                </SidebarWidget>
            </>
        )
    }

        
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.lstProductCate!==this.props.lstProductCate){
            let lstTag = this.props.lstProductCate.map((item, index) =>{
                return {
                    'tagTitle': item.prodCateTitle,
                    'tagAlias': '/product-category/' + item.prodCateAlias
                }
            })

            this.setState({
                ...this.state,
                lstTag,
                lstTopRated: this.props.lstTopRated
            })
        }
    }
}
