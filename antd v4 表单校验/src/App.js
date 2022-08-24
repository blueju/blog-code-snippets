import React from "react";
import "./styles.css";
import { Form, Input } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="demo">
        <Form>
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;
