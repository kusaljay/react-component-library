import React from 'react';
import Button from './components/Button';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="App">
      <Button onClick={() => console.log('clicked primary')}>Click Me!</Button>
      <Button secondary onClick={() => console.log('clicked secondary')}>Click Me!</Button>
      <Button inverse big onClick={() => console.log('clicked the big one')}>Click Me!</Button>
    </div>
  );
}

export default App;
