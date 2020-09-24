import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';
import Navbar from './Navbar';
import SingleColrPalette from './SingleColrPalette';
import NewPaletteForm from './NewPaletteForm';

const getPalette = (seedColors, choice) => generatePalette(seedColors.find(palette => palette.id === choice));

const newPaletteInitial = {
  colors: [],
  emoji: "🎨",
  id: '3',
  paletteName: 'New Test Palette',
};

function App() {
  const [level, setLevel ] = useState(500);
  const [colorFormat, changeColorFormat] = useState('hex');
  const [newPalette, updateNewPalette] = useState(newPaletteInitial);
  const [palettes, updatePalettes] = useState(seedColors);

  const saveNewPalette = (createdPalette) => {
    updateNewPalette(createdPalette);
    
    const newPaletteExists = palettes.some(p => p.paletteName === createdPalette.paletteName);
    const updatedPalettes = newPaletteExists ? 
        palettes.map( p => {
          if (p.paletteName === createdPalette.paletteName) {
            p.colors = [...createdPalette.colors]
          }
          return p;
        }) : 
        [...palettes, createdPalette];
        updatePalettes(updatedPalettes);
  }
  
  return (
    <div className="App">
      <Switch>
        {/* instead of using routeProps I destructure and send only history */}
        <Route exact path='/palette/new' render={({history}) => <NewPaletteForm {...{newPalette, updateNewPalette: saveNewPalette, history}}/>} />
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />}/>
        <Route exact path='/palette/:id' render={
          ({match: { params: { id } } }) => (
            [
              <Navbar key='navbarFull' {...{level, setLevel, colorFormat, changeColorFormat}} />,
              <Palette key={`palette-${id}`} palette={ getPalette(palettes, id) } selected={level} colorFormat={colorFormat} />
            ]
          )
        }/>
        <Route exact path='/palette/:paletteId/:colorId' render={
          ({match: { params: { paletteId, colorId } } }) => { 
            if (!paletteId || !colorId) return null;
            const { colors, emoji } = getPalette(palettes, paletteId);

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
