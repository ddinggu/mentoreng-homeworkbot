import React, { Component } from "react";
import LoginForm from './LoginForm';
import Homework from 'components/Homework';
import { hot } from 'react-hot-loader';

class App extends Component {
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

export default hot(module)(App);