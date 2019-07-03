import React, { Component } from 'react';
import Container from './components/Container';
import Flex, { Column } from './components/Flex';
import Button from './components/Button';

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
        </Container>
    );
  }
}

export default App;
