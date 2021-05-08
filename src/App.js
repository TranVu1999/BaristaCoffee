import React, {useEffect} from "react"
import {useDispatch} from 'react-redux'
import './assets/Sass/index.scss'
import './App.scss'
import {Switch, Route} from 'react-router-dom'
import routes from './containers/routes'

import Header from "./features/Layout/Header"
import Footer from "./features/Layout/Footer"

import HeaderLogo from './commons/components/HeaderLogo'
import HeaderNav from "./features/Layout/HeaderNav"
import FormLogin from "./features/Layout/FormLogin"
import Notifycation from "./features/Layout/Notifycation"

import api from './api'
import {actInitAccount} from './commons/modules/Account/action'
import {actInitCart} from './commons/modules/Cart/action'
import CartSlide from "./features/Layout/CartSlide"
import ChatBox from "./features/Layout/ChatBox"
import QuickView from "./features/Layout/QuickView"

import setHeader from './untils/setHeader'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
      setHeader(accessToken)
      api.post('auth/check-logged', {accessToken})
      .then(res =>{
        dispatch(actInitAccount(res.data.accountInfo))
      })
      .catch(err =>(
        console.log(err)
      ))
      
    }
  }, [])

  // init cart
  useEffect(() =>{
    const cart = localStorage.getItem('cart')
    if(cart){
      dispatch(actInitCart())
    }
  }, [])

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

      <FormLogin/>
      <Notifycation/>
      <CartSlide/>
      <ChatBox/>
      <QuickView/>
    </div>
  );

}
export default App;
