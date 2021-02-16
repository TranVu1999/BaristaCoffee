import React, { Component } from 'react';

import BookTable from './BookTable';
import HotSale from './HotSale';
import LastestPost from './LastestPost';
import ListBanner from './ListBanner';
import MainSlider from './MainSlider';
import OurMenu from './OurMenu';
import OurService from './OurService';
import Parallax from './Parallax';
import ServicePost from './ServicePost';
import SmallSlider from './SmallSlider';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <ListBanner/>
                <BookTable/>
                <ServicePost/>
                <Parallax/>
                <OurService/>
                <SmallSlider/>
                <OurMenu/>
                <HotSale/>
                <LastestPost/>
            </>
        )
    }
}
