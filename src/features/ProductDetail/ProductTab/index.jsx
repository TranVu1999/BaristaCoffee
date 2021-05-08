import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

import {standardDateTime} from './../../../commons/js/helpers'

import FormComment from './../../Layout/FormComment'
import ListComment from '../../Layout/ListComment';
import CommentItem from '../../Layout/CommentItem'

ProductTab.propTypes = {
    detail: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    length: PropTypes.number,
    weight: PropTypes.number,
    listComment: PropTypes.array,
    id: PropTypes.string,
};

ProductTab.defaultProps ={
    detail: "",
    weight: 1,
    height: 0.3,
    length: 0.3,
    width: 0.3,
    listComment: [],
    id: ""
}

function ProductTab(props) {

    const {
        id,
        listComment
    } = props

    const [currentTab, setCurrentTab] = useState(0)
    const [listCommentShow, setListCommentShow] = useState([])

    useEffect(() => {
        setListCommentShow(listComment)
    }, [listComment])

    const onHandleChoseTab = (indexTab) =>{
        setCurrentTab(indexTab)
    }

    const renderTabDescription = () =>{
        return <div className="product-tab__item">
            <p>{props.detail}</p>
        </div>
    }

    const renderTabInfomation = () =>{
        return (
            <div className="product-tab__item">
                <table>
                    <tbody>
                        <tr>
                            <th>Weight</th>
                            <td>{props.weight} kg</td>
                        </tr>
                        <tr>
                            <th>Dimensions</th>
                            <td>{props.width} x {props["length"]} x {props.height} cm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    const onHandleGetNewComment = newComment =>{
        const newListComment = [...listCommentShow, newComment]
        setListCommentShow(newListComment)
    }

    const renderTagComment = () =>{
        return (
            <div className="product-tab__item">
                <h2>{listCommentShow.length} Reviews For <span>Paper Bag</span> </h2>
                <ListComment>
                    {listCommentShow.map((item, index) =>{
                        const date = standardDateTime(item.createdDate)
                        return (
                            <CommentItem 
                                key = {index}
                                author = {item.author}
                                time = {`${date.date}.${date.month}.${date.year}`}
                                rating = {item.rating}
                                content = {item.comment}
                            />
                        )
                    })}

                </ListComment>

                <FormComment 
                    product = {id}
                    onGetNewComment = {onHandleGetNewComment}
                />
            </div>
        )
    }

    return (
        <div className="product-tabs">
            <ul className="product-nav">
                <li 
                    className= {currentTab === 0 ? "product-nav__item active" :"product-nav__item"}
                    onClick = {() => onHandleChoseTab(0)}
                ><h4>Description</h4></li>

                <li 
                    className= {currentTab === 1 ? "product-nav__item active" :"product-nav__item"}
                    onClick = {() => onHandleChoseTab(1)}
                ><h4>Additional Information</h4></li>

                <li 
                    className= {currentTab === 2 ? "product-nav__item active" :"product-nav__item"}
                    onClick = {() => onHandleChoseTab(2)}
                ><h4>Review (<span>{props.listComment.length}</span>)</h4></li>
            </ul>

            {currentTab === 0 ? renderTabDescription() : ""}
            {currentTab === 1 ? renderTabInfomation() : ""}
            {currentTab === 2 ? renderTagComment() : ""}
            
        </div>
    );
}

export default ProductTab;