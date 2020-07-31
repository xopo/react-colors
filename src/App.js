import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';

function App() {
  const palette = seedColors[0];
  const generatedPalette = generatePalette(palette);
  const selectedRange = 500;
  console.log({generatedPalette, selectedRange})

  return (
    <div className="App">
      <h3>Hello World of colors !!!</h3>
      <Palette palette={ generatedPalette } selected={selectedRange}/>
    </div>
  );
}

export default App;
