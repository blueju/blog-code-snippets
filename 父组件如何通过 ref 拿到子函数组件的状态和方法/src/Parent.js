import React from "react";
import "./styles.css";

import Children from "./Children";

class Parent extends React.Component {
  childRef = React.createRef();

  handleClick = () => {
    console.log(this.childRef);
  };

  render() {
    return (
      <div className="Parent">
        <button onClick={this.handleClick}>点击</button>
        <Children ref={this.childRef}></Children>
      </div>
    );
  }
}

export default Parent;
