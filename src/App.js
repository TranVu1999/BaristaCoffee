import React, { Component } from "react";
import './assets/Sass/index.scss';

// LAYOUT
import Header from './commons/components/Header';
import Footer from './commons/components/Footer';

import {Switch, Route} from 'react-router-dom';
import routes from './pages/routes';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      // if isOpenLogin is true, LoginPopup is opened, otherwise isOpenLogin is fasle
      isOpenLogin : false,
    }
  }

  handleLoginPopup = (isOpenLogin) =>{
    this.setState({isOpenLogin: isOpenLogin});
  }

  render(){
    const {isOpenLogin} = this.state;
    return (
      // <>
      //   <ClientScreen/>
      // </>
      <div className = "main-wrapper">
        <Header onOpenLogin = {this.handleLoginPopup}/>

        <Switch>
          {routes.map((item, index) =>{
            return <Route key = {index} path = {item.path} component = {item.component}/>
          })}
        </Switch>

        <Footer/>

        {/* <LoginComponent 
            isOpenLogin = {isOpenLogin}
            isClosePopup = {this.handleLoginPopup}
        /> */}
      </div>
    );
  }
  
}

export default App;
