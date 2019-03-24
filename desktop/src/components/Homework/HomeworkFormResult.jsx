import React from 'react';
import styled from 'styled-components';
import {
  Button, Segment, Card, Image
} from 'semantic-ui-react';
import dateConvertor from 'utils/dateConvertor';
import { registHomeWork } from 'api';

export default ({ homeworkData: { time, homework, imageURL } }) => {
  const isFilledData = time && homework;
  const timeContext = time ? dateConvertor(time) : '';

  return (
    <Container>
      <Button
        content="과제예약"
        primary
        onClick={() => registHomeWork({ time, homework, imageURL })}
        disabled={!isFilledData}
      />
      <Segment>
        <Card>
          <Card.Content header="예약날짜"></Card.Content>
          <Card.Content description={timeContext}></Card.Content>
        </Card>
      </Segment>

      <Segment>
        <Card>
          <Card.Content header="과제"></Card.Content>
          <Card.Content description={homework}></Card.Content>
        </Card>
      </Segment>

      <Segment>
        <Card>
          <Card.Content header="등록 이미지"></Card.Content>
          {imageURL
            ? <Image src={imageURL} />
            : null
          }
        </Card>
      </Segment>
    </Container>
  );
};

const Container = styled.div``;
