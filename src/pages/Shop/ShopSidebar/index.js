import React, { Component } from 'react';
import SidebarWidget from './../../../commons/components/SidebarWidget';
import Search from './../../../commons/components/Search';
import ListProduct from './ListProduct';
import ListTag from './ListTag';

export default class ShopSidebar extends Component {
    render() {
        return (
            <>
                <SidebarWidget widgetTitle = "Search">
                    <Search/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Recent Posts">
                    <ListProduct/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Tags">
                    <ListTag/>
                </SidebarWidget>

                <SidebarWidget>
                    <a href="/#" className="advertisement">
                        <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-sidebar-widget_maxrzx.jpg" alt="advertisement"/>
                    </a>
                </SidebarWidget>
            </>
        )
    }
}
