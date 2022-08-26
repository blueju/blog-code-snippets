import React, { useState, useEffect } from "react";
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

function PersonalInfo(props) {
  const [id, setId] = useState("");
  const [dataSource, setDataSource] = useState(props.dataSource);
  const [prevProps, setPrevProps] = useState(props);

  function handleChange(e) {
    console.log("2e2e2");
    setId(e.target.value);
    let dataSource;
    if (id.length) {
      dataSource = props.dataSource.filter((item) => {
        return item.id.includes(id);
      });
    } else {
      dataSource = props.dataSource;
    }
    setDataSource(dataSource);
  }

  useEffect(() => {
    console.log("useEffect");
    setDataSource(props.dataSource);
    setId("");
  }, [props]);

  return (
    <Card title="个人信息" size="small">
      <Input
        value={id}
        placeholder="身份证号"
        style={{ marginBottom: 10, width: 200 }}
        onChange={handleChange}
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={false}
      />
    </Card>
  );
}

export default PersonalInfo;
