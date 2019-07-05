import React, { Component } from 'react';
import Container from './components/Container/';
import Flex, { Column } from './components/Flex/';
import Button from './components/Button/';
import {InputField} from './components/Input/';

class App extends Component {
  state = {
    loading: false
  }

  render() {
    return (
        <Container className="App">
          <Flex noWrap>
            <Column three>
              <Button loading={this.state.loading} onClick={() => console.log('clicked primary')}>Click Me!</Button>
            </Column>
            <Column three>
              <Button secondary onClick={() => console.log('clicked secondary')}>Click Me!</Button>
            </Column>
            <Column three>
              <Button inverse big onClick={() => console.log('clicked the big one')}>Click Me!</Button>
            </Column>
          </Flex>
          <Flex column>
            <InputField label="First Name" name="firstName" />
            <InputField label="Last Name" name="lastName" />
          </Flex>
        
        </Container>
    )
  }
}

export default App;
