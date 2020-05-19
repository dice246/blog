import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MyDialog from "./MyDialog";
import Search from "./Search";
import { Menu } from 'antd';
import  './index.css'

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
            <Link to={'/search/1'}>search</Link>
          </nav>

          <Route exact path={'/my-dialog'} component={MyDialog}/>
          <Route path={'/search/:id'} component={Search}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default RouterPage;
