import React from "react";
import { BrowserRouter, Route, Link }from '../my/react-router-dom'
import Login from "./Login";
import  './index.css';
import MyDialog from "./MyDialog";
import Search from "./Search";
import NotFound from "./NotFound";
import UserPage from "./UserPage";
import {AuthRoute} from "./AuthRoute";

function MyReactRouterPage() {
  return(
    <div>
      <h1>my-react-router-page</h1>
      <BrowserRouter>
        <nav>
          <Link to={'/my-dialog'} className={'nav-item'}>myDialog</Link>
          <Link to={'/search/1'}  className={'nav-item'}>search</Link>
          <Link to={'/login'}  className={'nav-item'}>login</Link>
          <Link to={'/user'}  className={'nav-item'}>user</Link>
        </nav>
        {/*<AuthRoute path={'/user'} isLogin={false} component={UserPage}/>*/}
        <Route exact path={'/my-dialog'} component={MyDialog}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/search/:id'} component={Search}/>
        <Route component={NotFound}/>
      </BrowserRouter>
    </div>
  )
}

export default MyReactRouterPage
