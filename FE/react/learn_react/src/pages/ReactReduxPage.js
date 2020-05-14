import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, minus, asyAdd, reset } from '../action/reactRedux'

class ReactReduxPage extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { counter, add, minus, asyAdd, reset } = this.props;

    return (
      <div>
        <h1>react-redux-page</h1>
        <p>{ counter }</p>

        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={asyAdd}>asyAdd</button>
        <button onClick={reset}>reset</button>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      ...state
    }
  },
  {
    add,
    minus,
    asyAdd,
    reset
  }
)(ReactReduxPage)
