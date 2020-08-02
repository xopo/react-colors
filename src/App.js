import React, { useState } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';
import Navbar from './Navbar';



function App() {
  const [level, setLevel ] = useState(500);
  const palette = seedColors[2];
  const generatedPalette = generatePalette(palette);
  
  return (
    <div className="App">
      <Navbar {...{level, setLevel}} />
      <Palette palette={ generatedPalette } selected={level}/>
    </div>
  );
}

export default App;
