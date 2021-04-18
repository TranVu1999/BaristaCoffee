import React from 'react';
import PropTypes from 'prop-types';
import TagItem from './TagItem';
import './style.scss'

ListTag.propTypes = {
    activeTag: PropTypes.string,
    listTag: PropTypes.array,
    onGetProductCategory: PropTypes.func,
};

ListTag.defaultProps = {
    activeTag: "All",
    listTag: [],
    onGetProductCategory: null
}

function ListTag(props) {

    const onHandleGetTitle = (prodCateTitle) =>{
        if(props.onGetProductCategory){
            props.onGetProductCategory(prodCateTitle)
        }
    }

    const renderTag = () =>{
        if(props.listTag){
            return props.listTag.map((item, index) =>{
                return (
                    <TagItem 
                        key = {index}
                        title = {item}
                        onGetTitle = {onHandleGetTitle}
                        isActive = {props.activeTag === item}
                    />
                )
            })
        }

        return null
    }

    return (
        <div className="lst-tag">
            {renderTag()}
            <TagItem 
                title="All"
                onGetTitle = {() => onHandleGetTitle("All")}
                isActive = {props.activeTag === "All"}
            />
        </div>
    );
}

export default ListTag;