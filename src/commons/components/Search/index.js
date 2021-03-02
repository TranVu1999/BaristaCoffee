import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchStr: '',
            lstSearch: [
                "Coffee Bags",
                "Paper Cup",
                "Groud Coffee",
                "Paper Bag",
                "Tea Cup",
            ]
        }
    }

    onHandleChange = (event) =>{
        const {value} = event.target;

        this.setState({
            ...this.state,
            searchStr: value
            
        });
    }

    renderSearchItem = (keyItem, contentItem, contentSearch) =>{
        const indexSearch = contentItem.toLowerCase().indexOf(contentSearch);
        if(indexSearch && indexSearch !== -1){
            const lengthContentSearch = contentSearch.length;
            let startStr = contentItem.slice(0, indexSearch);
            let temp = contentItem.slice(indexSearch);
            let middleStr = temp.slice(0, lengthContentSearch);
            let endStr = contentItem.slice(indexSearch + lengthContentSearch);
            
            return <div key = {keyItem} className = "search-result--item">
                {startStr}
                <span>{middleStr}</span>
                {endStr}
            </div>
        }

    }

    renderListSearch = () =>{
        let {lstSearch, searchStr} = this.state;
        searchStr = searchStr.toLowerCase();

        return lstSearch.map((item, index) =>{
            return this.renderSearchItem(index, item, searchStr);
        })
    }


    render() {
        const {searchStr} = this.state;
        return (
           <div className="search-box">
                <div className="d-flex-center form-group">
                    <input 
                        type="text" 
                        placeholder="Type here..." 
                        onChange = {this.onHandleChange}
                        value = {searchStr}
                    />
                    <button><span aria-hidden="true" className="icon_search" /></button>
                </div>

                <div className ="search-result">
                    {this.renderListSearch()}
                </div>
            </div>

        )
    }
}
