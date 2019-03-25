import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Grid, Form, Segment, Button, Image
} from 'semantic-ui-react';
import { validateUser } from 'api';

export default class LoginForm extends Component {
  state = {
    id: null,
    password: null,
  };

  onChangeValidForm = attr => e => this.setState({ [attr]: e.target.value });

  validateUser = async () => {
    try {
      const { id, password } = this.state;
      const { onLogin } = this.props
      const { data } = await validateUser({ id, password });

      if (data.result) {
        onLogin();
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <LoginFormContainer>
        <GridContainer
          textAlign="center"
          verticalAlign="middle"
        >
          <FormContainer>
            <Image
              src={require('images/mentoreng.png')}
              centered
            />
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="ID"
                  onChange={this.onChangeValidForm('id')}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.onChangeValidForm('password')}
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.validateUser}
                >
                      Login
                </Button>
              </Segment>
            </Form>
          </FormContainer>
        </GridContainer>
      </LoginFormContainer>
    );
  }
}

const LoginFormContainer = styled.div`
  height: 100%;
`;

const GridContainer = styled(Grid)`
  height: 100%;
`;

const FormContainer = styled(Grid.Column)`
  max-width: 450px;
`;
