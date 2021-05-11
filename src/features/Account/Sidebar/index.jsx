import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

import './style.scss'

Sidebar.propTypes = {
    username: PropTypes.string,
    numFavorite: PropTypes.number,
    numReaded: PropTypes.number,
    numSaveForLate: PropTypes.number,
    numCommented: PropTypes.number,
};

Sidebar.defaultProps = {
    username: "Admin",
    numCommented: 0,
    numFavorite: 0,
    numReaded: 0,
    numSaveForLate: 0
    
}

function Sidebar(props) {

    const {
        username,
        numCommented,
        numFavorite,
        numReaded,
        numSaveForLate
    } = props

    const accountInfo = useSelector(state => state.accountReducer)

    const getAmountNew = (listData) =>{
        let amount = 0
        for(let item of listData){
        if(item.new){
            amount++
        }
        }
        return amount
    }

    const numNotify = getAmountNew(accountInfo.notifies)
    const numInvoice = getAmountNew(accountInfo.invoices)



    return (
        <div className="main-page__sidebar account__sidebar">
            <div className="d-flex-start account__author">
            <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/other/avatar_wy6qla.png" alt="avatar" />
            <div className="account__author--text">
                <span>Tài khoản này của</span>
                <h5>{username}</h5>
            </div>
            </div>

        <ul className="account__nav">
          <li>
            <NavLink
              to="/account/infomation"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="nav--item__text">Thông tin tài khoản</div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

            {/* Notify */}
          <li>
            <NavLink
              to="/account/notify"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </div>
              <div className="nav--item__text">
                Thông báo của tôi
                {numNotify ? (<span>{numNotify}</span>) : ""}
              </div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

            {/* Invoice */}
          <li>
            <NavLink
              to="/account/invoice"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" />
                </svg>
              </div>
              <div className="nav--item__text">Quản lý đơn hàng {numInvoice ? (<span>{numInvoice}</span>) : ""}</div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/account/address"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="nav--item__text">Số địa chỉ</div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

        {/* Commented */}
          <li>
            <NavLink
              to="/account/commented"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <img
                  className="icon"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/review-2.svg"
                  alt=""
                />
              </div>
                <div className="nav--item__text">
                    Nhận xét sản phẩm đã mua
                    {numCommented ? (<span>{numNotify}</span>) : ""}
                </div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

        {/* Readed */}
          <li>
            <NavLink
              to="/account/readed"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
                <div className="nav--item__text">
                    Sản phẩm bạn đã xem
                    {numReaded ? (<span>{numNotify}</span>) : ""}
                </div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

        {/* Favorite */}
          <li>
            <NavLink
              to="/account/favorite"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
                <div className="nav--item__text">
                    Sản phẩm yêu thích
                    {numFavorite ? (<span>{numNotify}</span>) : ""}
                </div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

        {/* Save for late */}
          <li>
            <NavLink
              to="/account/save-for-later"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
                <div className="nav--item__text">
                    Sản phẩm mua sau
                    {numSaveForLate ? (<span>{numNotify}</span>) : ""}
                </div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>

          <li >
            <NavLink
              to="/account/coin"
              className="account__nav--item"
              activeClassName="active"
            >
              <div className="nav--item__thumb">
                <img
                  className="icon"
                  srcSet="https://salt.tikicdn.com/ts/upload/b5/33/14/09096979a40d25a2ad3976e3809ceb78.png 2x, https://salt.tikicdn.com/ts/upload/4a/d4/da/77fe4fd0c771088f7794ba3ce66782eb.png 1x"
                  alt=""
                />
              </div>
              <div className="nav--item__text">Quản lý xu của tôi</div>
              <span
                aria-hidden="true"
                className="res-icon arrow_carrot-right"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    )
}

export default Sidebar;