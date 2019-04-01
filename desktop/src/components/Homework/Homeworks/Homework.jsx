import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { convertKorDate } from 'utils/dateConvertor';
import { homeworkAlarm, confirmAlert } from 'utils/alerts'

export default class Homework extends Component {
  refreshState = id => {
    confirmAlert(id)
      .then(result => {
        if(result) {
          const { removeHomeworkData } = this.props;
          removeHomeworkData(id);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { homework: {_id: id, data: { homework, imageURL }, lastRunAt, nextRunAt } } = this.props;
    const isRun = new Date(lastRunAt) < new Date();

    return (
      <Table.Row error={isRun} >
          <Table.Cell>{id}</Table.Cell>
          <Table.Cell>
            <Icon 
              name='content'
              onClick={() => homeworkAlarm(homework, imageURL)}
            />
          </Table.Cell>
          <Table.Cell>{convertKorDate(lastRunAt || nextRunAt)}</Table.Cell>
          <Table.Cell>
            <Icon
              name='delete'
              onClick={() => this.refreshState(id)}
            />
          </Table.Cell>
      </Table.Row>  
    );
  }
};


