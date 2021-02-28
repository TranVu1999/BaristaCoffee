import React, { Component } from "react";
import './assets/Sass/index.scss';

// LAYOUT
import Header from './commons/components/Header';
import Footer from './commons/components/Footer';

import {Switch, Route} from 'react-router-dom';
import routes from './pages/routes';
import Login from "./commons/components/Login";


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
      </div>
    );
  }
  
}

export default App;
