import React, { Component } from "react";
import { Icon } from "antd";

class TreeNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }
  }

  handleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { data } = this.props;
    const hasChildren = data.children && data.children.length > 0;
    const { expanded } = this.state;

    return (
      <div>
        {
          hasChildren
          &&
          <Icon type={expanded ? 'caret-down' : 'caret-right'} onClick={this.handleExpanded}/>
        }
        {data.name}

        {
          hasChildren
          &&
          expanded
          && data.children.map(item =>
            <TreeNode data={item} key={item.key}/>
          )
        }
      </div>
    );
  }
}


export default TreeNode
