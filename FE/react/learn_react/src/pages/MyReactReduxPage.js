import React, { Component } from "react";
import { connect } from '../my/react-redux'
import {add, minus, reset, asyAdd} from '../action/reactRedux'

class MyReactReduxPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { count, add, minus, reset, asyAdd } = this.props;

    return (
      <div>
        <h1>MyReactReduxPage</h1>
        <p>{count}</p>
        <button onClick={() => add(123)}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={reset}>reset</button>
        <button onClick={asyAdd}>asyAdd</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      count: state
    }
}

const mapDispatchToProps = {
  add,
  minus,
  reset,
  asyAdd
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyReactReduxPage)
