import React, { Component } from "react";
import TreeNode from "./TreeNode";

class Tree extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return(
      <div>
        <TreeNode data={data}/>
      </div>
    )
  }
}

export default Tree;
