import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import FrontendAuth from "./utils/FrontendAuth";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <FrontendAuth></FrontendAuth>
        </Switch>
      </HashRouter>
    );
  }
}

export default Demo;
