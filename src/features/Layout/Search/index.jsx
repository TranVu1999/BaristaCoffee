import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Search.propTypes = {
    onGetKey: PropTypes.func,
    listKeySearch: PropTypes.array,
    onChoseKey: PropTypes.array,
};

Search.defaultProps = {
    onGetKey: null,
    onChoseKey: null,
    listKeySearch: []
}

function Search(props) {
    const [isOpenListKey, setIsOpenListKey] = useState(false)
    const [searchKey, setSearchKey] = useState("")
    const typingTimeoutRef = useRef(null)

    const onHanldeChoseKey = (keySearch) =>{
        setIsOpenListKey(false)
        setSearchKey(keySearch)

        if(props.onChoseKey){
            props.onChoseKey(keySearch)
        }
    }

    const renderKeyItem = (contentItem, contentSearch) =>{
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

    const renderListKey = () =>{
        if(props.listKeySearch && searchKey){
            let searchStr = searchKey.toLowerCase()
            return props.listKeySearch.map((item, index) =>{
                const str = renderKeyItem(item.key, searchStr)
                return <div 
                    key = {index} 
                    className = "search-result--item"
                    onClick = {() => onHanldeChoseKey(item.key)}
                >{str}</div>
            })
        }
    }

    const onHandleChange = event =>{
        const {value} = event.target

        if(props.listKeySearch || value){
            setIsOpenListKey(true)
        }else{
            setIsOpenListKey(false)
        }
        setSearchKey(value)

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() =>{
            
            if(props.onGetKey){
                props.onGetKey(value)
            }
            
        }, 500)
    }

    const onHanldeSubmit = event =>{
        event.preventDefault()
        if(props.onChoseKey){
            props.onChoseKey(searchKey)
        }
    }

    return (
        <form 
            className="search-box"
            onSubmit = {onHanldeSubmit}
           >
            <div className="d-flex-center form-group">
                <input 
                    type="text" 
                    placeholder="Type here..." 
                    onChange = {onHandleChange}
                    value = {searchKey}
                />
                <button><span aria-hidden="true" className="icon_search" /></button>
            </div>

            <div 
                className ="search-result"
                style = {{display: isOpenListKey ? "block" : "none"}}
            >
                {renderListKey()}
            </div>
        </form>
    );
}

export default Search;