import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from 'components/common/LoginForm';
import Homework from 'components/Homework';

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={LoginForm} />
        <Route path="/homework" component={Homework} />
      </>
    );
  }
}
