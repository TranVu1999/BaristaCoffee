import React, { Component } from 'react';
import { debounce, throttle } from 'lodash';
import './style.scss';

import {actGetListKeywordApi} from './../../modules/Keyword/actions';
import {actGetDataShopByKeyApi} from './../../modules/Shop/actions';

import {connect} from 'react-redux';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchStr: '',
            isOpenListKey: false
        };
        this.throttleHandleChange = debounce(this.throttleHandleChange.bind(this), 300);
    }

    throttleHandleChange() {
        const {searchStr} = this.state;
        const data = {
            accountId: this.props.accountInfo.accountId,
            keyword: searchStr.toLowerCase()
        }
        this.props.onGetListKeyword(data);
        this.setState({...this.state, isOpenListKey: true})
    }

    onHandleChange = (event) =>{
        const {value} = event.target;
        this.setState({
            ...this.state,
            searchStr: value
        }, this.throttleHandleChange());
    }

    onChooseKey = (key) =>{
        this.setState({
            ...this.state,
            searchStr: key
        }, () =>{
            this.props.onGetDataByKeyword({
                page: this.props.pageActive,
                sortBy: this.props.sortBy,
                prodCateAlias: this.props.prodCateAlias,
                keyword: key,
            });
        });   
    }

    renderSearchItem = (contentItem, contentSearch) =>{
        const indexSearch = contentItem.toLowerCase().indexOf(contentSearch);

        if(contentSearch && indexSearch !== -1){
            const lengthContentSearch = contentSearch.length;

            let startStr = contentItem.slice(0, indexSearch);
            let temp = contentItem.slice(indexSearch);
            let middleStr = temp.slice(0, lengthContentSearch);
            let endStr = contentItem.slice(indexSearch + lengthContentSearch);

            return (<>{startStr}<span>{middleStr}</span>{endStr}</>)
        }
        

        return null;

    }

    renderListSearch = () =>{
        let {searchStr} = this.state;
        let {listKeyword} = this.props;
        searchStr = searchStr.toLowerCase();

        if(listKeyword){
            return listKeyword.map((item, index) =>{
                const str = this.renderSearchItem(item.key, searchStr)
                return <div 
                        key = {index} 
                        className = "search-result--item"
                        onClick = {() => this.onChooseKey(item.key)}
                    >{str}</div>
            })
        }

        return null;
    }

    onGetData = (event) =>{
        event.preventDefault();
        this.props.onGetDataByKeyword({
            page: this.props.pageActive,
            sortBy: this.props.sortBy,
            prodCateAlias: this.props.prodCateAlias,
            keyword: this.state.searchStr,
        });
    }

    render() {
        const {searchStr, isOpenListKey} = this.state;
        return (
           <form 
            className="search-box"
            onSubmit = {this.onGetData}
           >
                <div className="d-flex-center form-group">
                    <input 
                        type="text" 
                        placeholder="Type here..." 
                        onChange = {this.onHandleChange}
                        onBlur = {() => this.setState({...this.state, isOpenListKey: false})}
                        value = {searchStr}
                    />
                    <button><span aria-hidden="true" className="icon_search" /></button>
                </div>

                <div 
                    className ="search-result"
                    // style = {{display: isOpenListKey ? "block" : "none"}}
                >
                    {this.renderListSearch()}
                </div>
            </form>

        )
    }
}

const mapStateToProps = state =>{
    const shopInfo = state.shopReducer;
    return {
        listKeyword: state.keywordReducer.data.listKeyword,
        accountInfo: state.loginReducer.data.accountInfo,

        pageActive: shopInfo.data.pageActive,
        sortBy: shopInfo.data.sortBy,
        prodCateAlias: shopInfo.data.prodCateAlias
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetListKeyword: (keyword) =>{
            dispatch(actGetListKeywordApi(keyword))
        },
        onGetDataByKeyword: (keyword) =>{
            dispatch(actGetDataShopByKeyApi(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
