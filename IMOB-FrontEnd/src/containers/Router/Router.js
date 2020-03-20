import React, {Component} from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Sale from "../PropertiesSale/Sale";
import Rent from "../PropertiesRent/Rent";
import Home from "../Home/Home";
import Details from "../PropertiesDetails/Details";


export const routes = {
  signup: '/signup',
  login: '/login',
  home: '/',
  sale: '/sale',
  rent: '/rend',
  details: '/details'

}

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={routes.signup} component={Signup} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.sale} component={Sale} />
          <Route path={routes.rent} component={Rent} />
          <Route path={routes.details} component={Details} />
          <Route path={routes.home} component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
