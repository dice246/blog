import React, { Component } from "react";
import FormCreate from "../components/FormCreate";
import {Button, Input} from "antd";


const nameRules = {
  required: true,
  message: '必填'
}

const passwordRules = {
  required: true,
  message: '必填'
}

class MyForm extends Component{
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    const { validateFields, getFieldValue } = this.props;

    console.log('name: ', getFieldValue('name'));

    validateFields((err, values) => {
      if (err) {
        console.error(err)
      } else {
        console.log(values)
      }
    })
  }

  render() {
    const { getFiledDecorator } = this.props;

    return (
      <div>
        <h1>my form test</h1>

        {
          getFiledDecorator('name', nameRules)(
            <input type={'text'} placeholder={'请输入用户名'}/>
          )
        }

        {
          getFiledDecorator('password', passwordRules)(
            <input type={'password'} placeholder={'请输入密码'}/>
          )
        }

        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }
}

export default FormCreate(MyForm);
