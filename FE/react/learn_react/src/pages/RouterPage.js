import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MyDialog from "./MyDialog";
import Search from "./Search";
import NotFound from './NotFound'
import { Menu } from 'antd';
import  './index.css'
import Login from "./Login";
import {AuthRoute} from "./AuthRoute";
import UserPage from "./UserPage";

class RouterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { SubMenu } = Menu;

    return (
      <div>
        <h1>RouterPage</h1>
        <BrowserRouter>
          <nav>
            <Link to={'/my-dialog'} className={'nav-item'}>myDialog</Link>
            <Link to={'/search/1'}  className={'nav-item'}>search</Link>
            <Link to={'/login'}  className={'nav-item'}>login</Link>
            <Link to={'/user'}  className={'nav-item'}>user</Link>
          </nav>

          <Switch>
            <AuthRoute path={'/user'} isLogin={false} component={UserPage}/>
            <Route exact path={'/my-dialog'} component={MyDialog}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/search/:id'} component={Search}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default RouterPage;
