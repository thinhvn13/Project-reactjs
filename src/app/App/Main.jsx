import React,{useEffect, useState} from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../store';
import { history } from '../store/history';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePageContainer } from './pages/HomePage/index';
import { FooterPresentation } from './components/Footer/index';
import './style/index.css';
import { LightBoxPresentation } from './components/LightBox/index';
import { HeaderPresentation } from './components/Header/index';
import { NavigationPresentation } from './components/Navigation/index';
import { requestState } from './../store/mutations';
import * as mutations from './../store/mutations'

// const store= configureStore();
store.dispatch(requestState());

export const Main = ()=>{
       return(
       <Router history={history}>
              <Provider store={store}>
                     <>
                     {/* <ConnectedNavigation/> */}
                     {/* <Navigation/> */}
                     <HeaderPresentation/>
                     <NavigationPresentation/>
                     {/* {initStore==true?
                     <Route exact path="/" component={HomePageContainer} />:
                     null} */}
                     <Route exact path="/" component={HomePageContainer} />
                     {/* <Route exact
                            path="/login"
                            component={ConnectedLogin}/>
                     <Route exact
                            path="/home"
                            component={HomePage}/>
                     <Route exact
                            path="/product"
                            component={ProductPage}/>
                     <Route exact
                            path="/register"
                            component={RegisterPage}/>
                     <Route exact
                            path="/dashboard"
                            render={RouteGuard(ConnectedDashboard)}/>
                     
                     <Route exact
                            path="/task/:id"
                            render={RouteGuard(ConnectedTaskDetail)} /> */}
                            
                     {/* <Footer/> */}
                     <LightBoxPresentation/>
                     <FooterPresentation/>
                     </>
              </Provider>
       </Router>
);}