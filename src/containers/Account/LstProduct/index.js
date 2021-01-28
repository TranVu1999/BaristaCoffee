import React, { Component } from "react";
import LstProductContainer from "../../LstProduct";

export default class AccountLstProduct extends Component {
  showTitleAccountContent = () => {
    const { title } = this.props;
    switch (title) {
      case "favorite":
        return "Sản phẩm yêu thích";
      case "readed":
        return "Sản phẩm đã xem";
      case "save-for-later":
        return "Sản phẩm mua sau";
      case "commented":
        return "Sản phẩm đã nhận xét";
      default:
        return "";
    }
  };

  render() {
    return (
      <div className="account-content--box">
        <span className="account__title">
            {this.showTitleAccountContent()} (1)
        </span>
        <div className="account__content">
          <div className="row-product">
            <LstProductContainer />
          </div>
        </div>
      </div>
    );
  }
}
