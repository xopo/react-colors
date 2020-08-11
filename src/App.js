import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Route exact path='/' render={() => <h1>Palette list component goes here</h1>}/>
        <Route exact path='/palette/:id' render={
          ({match: { params: { id } } }) => (
            [<Navbar {...{level, setLevel, colorFormat, changeColorFormat}} />,
              <Palette palette={ getPalette(id) } selected={level} colorFormat={colorFormat} />
            ]
          )
        }/>
      </Switch>
    </div>
  );
}

export default App;
