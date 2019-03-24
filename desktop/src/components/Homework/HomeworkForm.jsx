import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Form, Loader } from 'semantic-ui-react';
import TextArea from 'react-textarea-autosize';
import { getimageEndpoint } from 'api';

import Flatpickr from 'react-flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';
import 'flatpickr/dist/themes/material_blue.css';

export default class HomeworkForm extends Component {
  static propTypes = {
    onChangeHomeworkForm: PropTypes.func
  }

  state = {
    loading: false
  };

  onLoadImagePick = () => this.setState(prevState => ({ loading: !prevState.loading }));

  imagePick = async () => {
    const imageForm = new FormData();
    imageForm.append('img', document.getElementById('hw-image').files[0]);

    try {
      const { data } = await getimageEndpoint(imageForm);
      this.onLoadImagePick();

      if (data.result) {
        const { onChangeHomeworkForm } = this.props;
        await this.onLoadImagePick();

        onChangeHomeworkForm('imageURL')(data.imageURL);
      } else {
        this.onLoadImagePick();
        alert(data.title);
        console.error(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { onChangeHomeworkForm } = this.props;

    return (
      <Container>
        <Segment padded color="blue">
          <Title>날짜 선택</Title>
          <Form>
            <Flatpickr
              data-enable-time
              options={{ locale: Korean }}
              onChange={date => onChangeHomeworkForm('time')(date[0])}
            />
          </Form>
        </Segment>
        <Segment padded color="red">
          <Title>과제 입력</Title>
          <Form>
            <HomeworkContents
              onChange={e => onChangeHomeworkForm('homework')(e.target.value)}
            />
          </Form>
        </Segment>
        <Segment padded color="green">
          <Title>이미지 등록</Title>
          <Form>
            <Loader active={this.state.loading} inverted />
            <input
              type="file"
              name="file"
              id="hw-image"
              onChange={this.imagePick}
            />
          </Form>
        </Segment>
      </Container>
    );
  }
}

const Container = styled.div``;

const Title = styled.h3`
  display: block;
`;

const HomeworkContents = styled(TextArea)`
  max-width: 400px;
`;
