import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux'
import {actOpenChatBoxMessage} from './../../../commons/modules/ChatBox/action'
import {actInviteRoom} from './../../../commons/modules/socket/actions'
import './style.scss'

InfomationStore.propTypes = {
    id: PropTypes.string,
    brand: PropTypes.string,
    alias: PropTypes.string,
    logo: PropTypes.string,
};

InfomationStore.defaultProps = {
    id: "",
    brand: "",
    alias: "",
    logo: ""
}

function InfomationStore(props) {
    const {
        id,
        brand,
        alias,
        logo
    } = props


    const dispatch = useDispatch()

    const onHanldeOpenChatBox = () =>{
        dispatch(actOpenChatBoxMessage())
        dispatch(actInviteRoom({
            invite: id,
            roomMaster: localStorage.getItem('account')
        }))
    }

    return (
        <div className = "infomation-store__container">
            <div className="info-store--left">
                <div className="store-logo">
                    <a href="/#" className="d-block">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <div className="store-text">
                    <h4>{brand}</h4>

                    <span>Online 10 phút trước</span>
                    <div className="store-button">
                        <button
                            onClick = {onHanldeOpenChatBox}
                        > <svg viewBox="0 0 16 16" class="shopee-svg-icon _8j52Y0 "><g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path></g></svg>Chat Ngay</button>

                        <a href="/#"><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" strokeWidth="0" class="shopee-svg-icon _16LcGE "><path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path></svg>Xem Shop</a>
                    </div>
                </div>
            </div>

            <div className="info-store--right">
                <div className="info-store-number">
                    <p><label>Đánh giá </label>650</p>
                    <p><label>Sản phẩm </label>29</p>
                </div>

                <div className="info-store-number">
                    <p><label>Tỉ lệ phản hồi </label>95%</p>
                    <p><label>Thời gian phản hồi </label>Trong vài giờ</p>
                </div>

                <div className="info-store-number">
                    <p><label>Tham gia </label>6 tháng trước</p>
                </div>
            </div>
        </div>
    );
}

export default InfomationStore;