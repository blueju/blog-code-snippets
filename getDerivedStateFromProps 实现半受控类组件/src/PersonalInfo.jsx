import React from "react";
import { Table, Input, Card } from "antd";

const columns = [
  {
    title: "身份证号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "出生时间",
    dataIndex: "birthTime",
    key: "birthTime",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
];

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      dataSource: this.props.dataSource,
      prevProps: this.props,
    };
  }
  /**
   * 参考：
   * 1、https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops
   * 2、https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
   * @param {*} nextProps
   * @param {*} prevState
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState.prevProps) {
      return {
        dataSource: nextProps.dataSource,
        prevProps: nextProps,
      };
    }
    return null;
  }

  handleChange = (e) => {
    let dataSource;
    if (e.target.value.trim().length) {
      dataSource = this.props.dataSource.filter(({ id }) => {
        return id.includes(e.target.value);
      });
    } else {
      dataSource = this.props.dataSource;
    }
    this.setState({
      id: e.target.value,
      dataSource,
    });
  };

  render() {
    return (
      <Card title="个人信息" size="small">
        <Input
          value={this.state.id}
          placeholder="身份证号"
          style={{ marginBottom: 10, width: 200 }}
          onChange={this.handleChange}
        />
        <Table
          rowKey="id"
          columns={columns}
          dataSource={this.state.dataSource}
          bordered
          pagination={false}
        />
      </Card>
    );
  }
}

export default PersonalInfo;
