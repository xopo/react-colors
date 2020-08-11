import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';
import Navbar from './Navbar';



function App() {
  const [level, setLevel ] = useState(500);
  const [colorFormat, changeColorFormat] = useState('hex');
  const palette = seedColors[2];
  const generatedPalette = generatePalette(palette);
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <h1>route goes here</h1>}/>
        <Route exact path='/palette/:id' render={
          (params) => { 
            console.log(params); 
            return <h1>route goes here</h1>;
          } 
        }/>
      </Switch>
      {/* <Navbar {...{level, setLevel, colorFormat, changeColorFormat}} />
      <Palette palette={ generatedPalette } selected={level} colorFormat={colorFormat} /> */}
    </div>
  );
}

export default App;
