import React, { Component } from "react";

export default function FormCreate(Comp) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.options = {}
      this.state = {}
    }

    handleChange = (e) => {
      const { name, value } = e.target;

      this.setState({
        [name]: value
      })
    }

    getFiledDecorator = (field, option) => {
      this.options[field] = option;

      return InputComp => (
        <div>
          {
            React.cloneElement(InputComp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange
            })
          }
        </div>
      )
    }

    getFieldValue = (field) => {
      return this.state[field]
    }

    validateFields = (callback) => {
      const res = {...this.state};
      const err = [];

      for (let i in this.options) {
        if (res[i] === undefined) {
          err.push({[i]: 'error'})
        }
      }

      err.length ? callback(err, res) : callback(undefined, res)

    }

    render() {
      return (
        <div className={'border'}>
          <Comp
            {...this.props}
            getFiledDecorator={this.getFiledDecorator}
            validateFields={this.validateFields}
            getFieldValue={this.getFieldValue}
          />
        </div>
      )
    }
  }
}
