import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const PaletteList = ({palettes}) => { console.log({palettes}); return (
    <div>
        <h1>React Colors</h1>
        <ul>
            {palettes.map(palette => (
            <li key={palette.id}>
                <Link to={`/palette/${palette.id}`} key={palette.id}>
                    <MiniPalette {...palette} />
                </Link>
            </li>))}
        </ul>
    </div>
)};

export default PaletteList;