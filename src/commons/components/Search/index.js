import React, { Component } from 'react';
import { debounce, throttle } from 'lodash';
import './style.scss';

import {actGetListKeywordApi} from './../../modules/Keyword/actions';

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
        const data = {
            accountId: this.props.accountInfo.accountId,
            keyword: this.state.searchStr.toLowerCase()
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

    renderSearchItem = (keyItem, contentItem, contentSearch) =>{
        const indexSearch = contentItem.toLowerCase().indexOf(contentSearch);

        if(contentSearch && indexSearch !== -1){
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

        return null;

    }

    renderListSearch = () =>{
        let {searchStr} = this.state;
        let {listKeyword} = this.props;
        searchStr = searchStr.toLowerCase();

        if(listKeyword){
            return listKeyword.map((item, index) =>{
                return this.renderSearchItem(index, item.key, searchStr);
            })
        }

        return null;
    }

    render() {
        const {searchStr, isOpenListKey} = this.state;
        return (
           <div className="search-box">
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
                    style = {{display: isOpenListKey ? "block" : "none"}}
                >
                    {this.renderListSearch()}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state =>{
    return {
        listKeyword: state.keywordReducer.data.listKeyword,
        accountInfo: state.loginReducer.data.accountInfo
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetListKeyword: (keyword) =>{
            dispatch(actGetListKeywordApi(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
