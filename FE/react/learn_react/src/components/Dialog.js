import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Icon } from "antd";

class Dialog extends Component {
  constructor(props) {
    super(props);

    const doc = window.document;
    this.node = doc.createElement("div");

  }

  componentDidMount() {
    window.document.body.appendChild(this.node);
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  render() {
    const { toggleVisible } = this.props;

    return createPortal(
      <div className={'dialog'}>
        <div className="dialog-mask"></div>
        <div className="dialog-content">
          <div className={'title'}>
            <Icon type="close" onClick={toggleVisible}/>
          </div>
          {this.props.children}
        </div>
      </div>,
      this.node
    )
  }
}

export default Dialog
