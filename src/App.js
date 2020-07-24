import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <h3>Hello World of colors !!!</h3>
      <Palette palette={{...seedColors[0]}}/>
    </div>
  );
}

export default App;
