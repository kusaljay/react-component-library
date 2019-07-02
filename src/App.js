import React from 'react';
import Container from './components/Container';
import Flex from './components/Flex';
import Button from './components/Button';

const App = () => {
  return (
      <Container className="App">
        <Flex justifyContent> 
          <Button onClick={() => console.log('clicked primary')}>Click Me!</Button>
          <Button secondary onClick={() => console.log('clicked secondary')}>Click Me!</Button>
          <Button inverse big onClick={() => console.log('clicked the big one')}>Click Me!</Button>
        </Flex>
      </Container>
  );
}

export default App;
