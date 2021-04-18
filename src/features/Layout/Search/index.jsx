import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Search.propTypes = {
    
};

function Search(props) {
    const renderListSearch = () =>{

    }

    const onHandleChange = event =>{

    }

    return (
        <form 
            className="search-box"
            // onSubmit = {this.onGetData}
           >
            <div className="d-flex-center form-group">
                <input 
                    type="text" 
                    placeholder="Type here..." 
                    onChange = {onHandleChange}
                />
                <button><span aria-hidden="true" className="icon_search" /></button>
            </div>

            <div 
                className ="search-result"
            >
                {renderListSearch()}
            </div>
        </form>
    );
}

export default Search;