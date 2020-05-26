// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import React from './my/react/index';
import ReactDOM from './my/react/react-dom'
import './index.css';
import App from './App';

function FuncCmp(props) {
  return (
    <div>
      <h1>我是function组件</h1>
      name: {props.name}
    </div>
  )
}

class ClassCmp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  clickHandle = () => {
    console.log('click....')
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>name: {name}</h1>
        <button onClick={this.clickHandle}>{count}</button>

        {
          [0, 1, 2].map((item, index) =>
            <FuncCmp key={index} name={item}/>
          )
        }
      </div>
    );
  }
}

const jsx = (
  <div>
    <div className={'border'}>我是内容</div>
    <FuncCmp name={'我是function组件'}/>
    <ClassCmp name={'我是class组件'}/>
  </div>
)


ReactDOM.render(
  jsx,
  document.getElementById('root')
);
