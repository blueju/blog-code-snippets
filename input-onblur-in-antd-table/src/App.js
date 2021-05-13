import "./styles.css";
import React from "react";
import { Table, Input } from "antd";
import "antd/dist/antd.css";

const components = {
  table(props) {
    return <table>{props.children}</table>;
  }
};

export default class App extends React.Component {
  state = {
    tableInput: "",
    dataSource: [
      {
        name: "lanju",
        password: "lanju",
        type: 1
      }
    ]
  };

  handleInputChange = (e, text, index) => {
    const dataSource = JSON.parse(JSON.stringify(this.state.dataSource));
    dataSource[index].name = e.target.value;
    this.setState({
      dataSource
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Table dataSource={this.state.dataSource} components={components}>
          <Table.Column
            dataIndex="name"
            title="name"
            render={(text, record, index) => {
              if (record.type === 1) {
                return (
                  <Input
                    // key={index}
                    value={this.state.tableInput}
                    onChange={(e) => {
                      // this.handleInputChange(e, text, index);
                      this.setState({
                        tableInput: e.target.value
                      });
                    }}
                  />
                );
              }
              if (record.type === 2) {
                return text;
              }
            }}
          />
          {/* <Table.Column
            dataIndex="password"
            title="password"
            render={(text, record, index) => {
              return <Input value={record.value} />;
            }}
          /> */}
        </Table>
        <Input.TextArea
          value={JSON.stringify(this.state.dataSource, null, 2)}
          autoSize
        />
      </div>
    );
  }
}
