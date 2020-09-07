import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';
import Navbar from './Navbar';
import SingleColrPalette from './SingleColrPalette';
import NewPaletteForm from './NewPaletteForm';

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
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}/>
        <Route exact path='/palette/:id' render={
          ({match: { params: { id } } }) => (
            [
              <Navbar key='navbarFull' {...{level, setLevel, colorFormat, changeColorFormat}} />,
              <Palette key={`palette-${id}`} palette={ getPalette(id) } selected={level} colorFormat={colorFormat} />
            ]
          )
        }/>
        <Route exact path='/palette/:paletteId/:colorId' render={
          ({match: { params: { paletteId, colorId } } }) => { 
            if (!paletteId || !colorId) return null;
            const { colors, emoji } = getPalette(paletteId);

            return [
              <Navbar key='navbarColor' {...{colorFormat, changeColorFormat}} />,
              <SingleColrPalette key='singlePalette' {...{paletteId, colorId, colors, colorFormat, emoji}} />
            ]
          }
        } />
      </Switch>
    </div>
  );
}

export default App;
