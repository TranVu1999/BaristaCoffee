import React from "react"
import './assets/Sass/index.scss'
import './App.scss'
import {Switch, Route} from 'react-router-dom'
import routes from './containers/routes';

import Header from "./features/Layout/Header"
import Footer from "./features/Layout/Footer"

import HeaderLogo from './commons/components/HeaderLogo'
import HeaderNav from "./features/Layout/HeaderNav"

function App() {
  return (
    <div className = "main-wrapper page">
      {/* START HEADER */}
      <Header>
        <div className="d-flex-between px-25 header__content">
          <HeaderLogo/>
          <HeaderNav/>
        </div>
      </Header>

      {/* START BODY */}
      <Switch>
        {routes.map((item, index) =>{
          return <Route key = {index} path = {item.path} component = {item.component}/>
        })}
      </Switch>

      {/* START FOOTER */}
      <Footer/>
    </div>
  );

}
export default App;
