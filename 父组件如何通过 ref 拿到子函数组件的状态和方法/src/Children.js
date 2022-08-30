import React, { useState, useImperativeHandle } from "react";
import "./styles.css";

const Children = React.forwardRef((props, ref) => {
  const [name, setName] = useState("name");

  useImperativeHandle(ref, () => ({
    name,
    changeName
  }));

  const changeName = () => setName(name + "changed");

  return <div className="Children">children</div>;
});

export default Children;
