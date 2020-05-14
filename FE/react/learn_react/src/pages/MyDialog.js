import React, { Component } from "react";
import Dialog from "../components/Dialog";
import {Button} from "antd";

class MyDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  toggleHandle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button type={'primary'} onClick={this.toggleHandle}>toggleDialog</Button>
        {
          visible
            &&
          <Dialog toggleVisible={this.toggleHandle}>
            <p>hello, world</p>
          </Dialog>
        }
      </div>
    )
  }
}

export default MyDialog
