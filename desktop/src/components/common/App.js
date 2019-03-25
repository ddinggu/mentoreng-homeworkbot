import React, { Component } from "react";
import LoginForm from './LoginForm';
import Homework from 'components/Homework';

export default class App extends Component {
  state = {
    isLogined: false
  }
  
  onLogin = () => this.setState(prevState => ({isLogined: !prevState.isLogined}));

  render() {
    const { isLogined } = this.state
    return (
      <>
        {isLogined 
          ? <Homework />
          : <LoginForm 
              onLogin={this.onLogin}
            />
        }
      </>
    );
  }
}
