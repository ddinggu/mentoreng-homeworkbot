import React from 'react';
import styled from 'styled-components';
import {Button, Segment, Image, Form} from 'semantic-ui-react';
import TextArea from 'react-textarea-autosize';
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
      <Segment padded color='blue'>
        <Title>날짜 선택</Title>
        
        <text>{timeContext || '날짜가 등록되지 않았습니다'}</text>
      </Segment>

      <Segment padded color='red'>
        <Title>과제</Title>
        <Form>
          <TextArea 
            value={homework || '과제가 등록되지 않았습니다'}
          />
         </Form>
      </Segment>

      <Segment>
        <Title>등록 이미지</Title>
        {imageURL
            ? <Image src={imageURL} />
            : null
          }
      </Segment>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h3`
  display: block;
`;