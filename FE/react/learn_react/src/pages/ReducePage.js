import React, { Component } from "react";
import { store }from '../store/reduceStore';

class ReducePage extends Component {

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

  render() {
    return (
      <div>
        <h1>reducePage</h1>
        <p>state: {store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default ReducePage
