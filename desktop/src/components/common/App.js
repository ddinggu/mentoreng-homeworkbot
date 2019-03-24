import React, { Component } from "react";
import Routes from "../../routes/Routes";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
