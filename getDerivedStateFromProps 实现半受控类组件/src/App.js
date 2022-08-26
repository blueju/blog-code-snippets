import "antd/dist/antd.min.css";
import { Button } from "antd";
import { useState } from "react";

import PersonalInfo from "./PersonalInfo";

export default function App() {
  const [dataSource, setDataSource] = useState([]);
  function show() {
    setDataSource([
      {
        id: "110101199508018876",
        name: "张三",
        age: "18",
        address: "西湖区湖底公园1号",
        birthTime: "2022-3-12 12:39:01",
      },
      {
        id: "330102199003071193",
        name: "李四",
        age: "28",
        address: "西湖区湖底公园2号",
        birthTime: "2022-3-12 12:40:09",
      },
      {
        id: "420102199003078637",
        name: "王五",
        age: "38",
        address: "西湖区湖底公园3号",
        birthTime: "2022-3-12 12:40:16",
      },
    ]);
  }
  return (
    <div className="App" style={{ padding: 10 }}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <Button type="primary" onClick={show} style={{ marginBottom: 10 }}>
        点击向下面的组件传入个人信息
      </Button>
      <PersonalInfo dataSource={dataSource} />
    </div>
  );
}
