import React, { Component } from "react";
import * as Validate from "./../../commons/js/validate-input";
import * as Notify from "./../../commons/constant/Notify";

export default class InputEmailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: "",
    };
  }

  handleOnEnter = (event) => {
    const { value } = event.target;
    let flag = true;

    if (!Validate.isEmail(event.target.value)) {
      this.setState({ notify: Notify.IS_NOT_EMAIL });
        flag = false;
    }

    if (Validate.isEmpty(value)) {
        this.setState({ notify: Notify.IS_EMPTY });
        flag = false;
    }

    if(flag){
        this.setState({notify: ''});
        this.props.onGetEmail(value);
    }
    
  };

  render() {
    const { notify } = this.state;

    return (
      <div className="input-group">
        <input
          type="text"
          placeholder="Please Enter Your Email"
          onBlur={this.handleOnEnter}
        />
        {notify !== "" ? (<p className="notify warning">{notify}</p>) : null}
      </div>
    );
  }
}
