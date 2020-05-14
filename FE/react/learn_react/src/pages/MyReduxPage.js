import React, { Component } from "react";
import { store }from '../store/myReduceStore';

class MyReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate(); // 强制重新渲染
    })
  }

  add = () => {
    store.dispatch({type: 'add'})
  }

  minus = () => {
    store.dispatch({type: 'minus'})
  }

  asyAdd = () => {
    store.dispatch((dispatch) =>
      setTimeout(() => {
        dispatch({
          type: 'add'
        })
      }, 1000)
    )
  }

  render() {
    return (
      <div>
        <h1>MyReduxPage</h1>
        <p>state: {store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
      </div>
    );
  }
}

export default MyReduxPage
