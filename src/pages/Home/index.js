import React, { Component } from 'react';
import BookTable from './BookTable';
import ListBanner from './ListBanner';
import MainSlider from './MainSlider';
import ServicePost from './ServicePost';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <ListBanner/>
                <BookTable/>
                <ServicePost/>
            </>
        )
    }
}
