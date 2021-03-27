import React, { Component } from "react";
import './assets/Sass/index.scss';

// LAYOUT
import Header from './commons/components/Header';
import Footer from './commons/components/Footer';

import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {actInitAccountInfo} from './commons/modules/Login/actions';
import routes from './pages/routes';
import Login from "./containers/Login";
import Cart from "./commons/components/Cart";
import Notification from "./commons/components/Notification";
import QuickView from "./commons/components/QuickView";


class App extends Component {

  render(){
    return (
      <div className = "main-wrapper page">
        <Header />

        <Switch>
          {routes.map((item, index) =>{
            return <Route key = {index} path = {item.path} component = {item.component}/>
          })}
        </Switch>

        <Footer/>

        <Login/>
        <Cart/>
        <Notification/>
        <QuickView/>
      </div>
    );
  }

  componentDidMount(){
    this.props.onInitAccountInfo();
  }
  
}

const mapDispatchToProps = dispatch =>{
  return{
    onInitAccountInfo: () =>{
      dispatch(actInitAccountInfo())
    }
  }
}



export default connect(null, mapDispatchToProps)(App);
