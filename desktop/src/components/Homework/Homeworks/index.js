import React, { Component } from 'react';
import List from './List';
import { getHomeworks } from 'api';

export default class Homeworks extends Component {
  state = {
    homeworks: []
  }
  
  async componentDidMount() {
    const { data: {homeworks} } = await getHomeworks();
    console.log(homeworks);

    this.setState({ homeworks });
  }

  removeHomeworkData = id => {
    const { homeworks } = this.state;
    const idx = homeworks.findIndex(hw => hw['_id'] === id);
    const copiedHWData = Object.assign(homeworks)

    if (idx >= 0) {
      copiedHWData.splice(idx, 1);
    }

    this.setState({homeworks: copiedHWData});
  }

  
  render() {
    const { homeworks } = this.state;

    return (
      <List 
        homeworks={homeworks}
        removeHomeworkData={this.removeHomeworkData}
      />
    )
  }
};

