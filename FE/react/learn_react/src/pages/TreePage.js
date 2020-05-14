import React, {Component} from "react";
import Tree from "../components/Tree";

const data = {
  key: '0',
  name: '前端框架',
  children: [
    {
      key: '1',
      name: 'react',
      children: [
        {name: 'react-router', key: '1-0'},
        {name: 'react-redux', key: '1-1'},
        {
          name: 'framework',
          key: '1-2',
          children: [
            {name: 'umi', key: '1-2-0'},
            {name: 'next.js', key: '1-2-1'},
          ]
        }
      ]
    },
    {
      key: '2',
      name: 'vue',
      children: [
        {name: 'vuex', key: '2-1'}
      ]
    }
  ]
}

class TreePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tree data={data}/>
      </div>
    );
  }
}

export default TreePage;
