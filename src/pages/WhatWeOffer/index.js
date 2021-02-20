import React, { Component } from 'react'
import ListOffer from '../../commons/components/ListOffer'
import ListOfferImg from '../../commons/components/ListOfferImg'
import MainPage from '../../commons/components/MainPage';
import FullBanner from '../../commons/components/FullBanner';

export default class WhatWeOfferPage extends Component {
    render() {
        return (
            <>
                <FullBanner/>

                <MainPage>
                    <div className="offer__content">
                        <ListOffer/>
                        <ListOfferImg/>
                    </div>

                </MainPage>

            </>
        )
    }
}
