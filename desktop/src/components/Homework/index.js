import React, { PureComponent } from 'react';
import HomeworkRegist from './HomeworkRegist';
import Homeworks from './Homeworks';
import Header from './Header'

export default class Homework extends PureComponent {
  state = {
    isRegistPage: true 
  }

  moveRegistPage = () => this.setState({ isRegistPage: true });
  moveHistoryPage = () => this.setState({ isRegistPage: false });

  render() {
    const { isRegistPage } = this.state;

    return (
      <>
        <Header 
          moveRegistPage={this.moveRegistPage}
          moveHistoryPage={this.moveHistoryPage}
        />
        { isRegistPage 
          ? <HomeworkRegist /> 
          : <Homeworks />
        }
      </>
    )
  }
}
