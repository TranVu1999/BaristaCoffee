import React, { Component } from 'react';
import ListBanner from './ListBanner';
import MainSlider from './MainSlider';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <ListBanner/>
            </>
        )
    }
}
