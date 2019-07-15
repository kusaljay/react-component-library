import React, { Component } from 'react';
import Container from './components/Container/';
import Flex, { Column } from './components/Flex/';
import Button from './components/Button/';
import {InputField} from './components/Input/';
import Card from './components/Card';

class App extends Component {
  state = {
    loading: true
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
          <Flex>
            <Card primary>Lorem ipsum dolor sit amet, ut nullam facilisi eos.</Card>
            <Card primary delay={300}>Lorem ipsum dolor sit amet, ut nullam facilisi eos.</Card>
          </Flex>
          
        
        </Container>
    )
  }
}

export default App;
