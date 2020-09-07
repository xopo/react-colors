import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { PalleteListStyled } from './Styled/StyledComponents';

const PaletteList = ({palettes, history}) => { console.log({palettes}); return (
    <PalleteListStyled>
        <div>
            <nav>
                <h1>React Colors</h1>
                <Link to='/palette/new'>Create New Palette</Link>
            </nav>
            <ul>
                {palettes.map(palette => (
                <li key={palette.id}>
                    <Link 
                        onClick={() => history.push(`/palette/${palette.id}`)}
                        to={`/palette/${palette.id}`} 
                        key={palette.id}>
                        <MiniPalette {...palette} />
                    </Link>
                </li>))}
            </ul>
        </div>
    </PalleteListStyled>
)};

export default PaletteList;