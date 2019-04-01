import React from 'react';
import Homework from './Homework';
import { Table } from 'semantic-ui-react';

export default ({homeworks, removeHomeworkData}) => {
  return (
    <Table>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>과제정보</Table.HeaderCell>
        <Table.HeaderCell>예약날짜</Table.HeaderCell>
        <Table.HeaderCell>취소</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {homeworks.map( homework => 
        <Homework 
          key={homework['_id']}
          homework={homework}
          removeHomeworkData={removeHomeworkData}
        />
      )}
    </Table.Body>
    </Table>
  )
}
