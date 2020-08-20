import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';
import Navbar from './Navbar';

const getPalette = (choice)  => {
  return generatePalette(seedColors.find(palette => palette.id === choice))
}

function App() {
  const [level, setLevel ] = useState(500);
  const [colorFormat, changeColorFormat] = useState('hex');
  // const palette = seedColors[2];
  // const generatedPalette = generatePalette(palette);
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}/>
        <Route exact path='/palette/:id' render={
          ({match: { params: { id } } }) => (
            [<Navbar {...{level, setLevel, colorFormat, changeColorFormat}} />,
              <Palette palette={ getPalette(id) } selected={level} colorFormat={colorFormat} />
            ]
          )
        }/>
        <Route exact path='/palette/:paletteId/:colorId' render={
          ({match: { params: { paletteId, colorId } } }) => { 
            console.log('add component for this', {colorId, paletteId});
            return <h1>Work hard and work well</h1>
          }
        } />
      </Switch>
    </div>
  );
}

export default App;
