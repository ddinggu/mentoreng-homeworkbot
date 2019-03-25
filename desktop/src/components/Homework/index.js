// https://api.slack.com/docs/message-attachments

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import HomeworkForm from './HomeworkForm';
import HomeworkFormResult from './HomeworkFormResult';

export default class Homework extends Component {
  state = {
    homework: '',
    time: null,
    imageURL: null
  };

  onChangeHomeworkForm = attr => value => this.setState({ [attr]: value });

  render() {
    return (
      <HomeworkCotainer>
        <GridContainer >
          <Grid.Column width={7}>
            <HomeworkForm
              onChangeHomeworkForm={this.onChangeHomeworkForm}
            />
          </Grid.Column>
          <Grid.Column width={9}>
            <HomeworkFormResult
              homeworkData={this.state}
            />
          </Grid.Column>
        </GridContainer>
      </HomeworkCotainer>
    );
  }
}

const HomeworkCotainer = styled.div`
    height: 100%;
`;

const GridContainer = styled(Grid)`
  height: 100%;
`;
