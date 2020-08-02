import React, { memo } from 'react';
import style from 'styled-components';
import ColorBox from './ColorBox';

const PaletteStyled = style.div`
    height: 100vh;
`;

const PaletteColorsStyled = style.div`
    height: 100%;
`;

const Palette = ({ palette: { colors, emoji, id, paletteName }, selected }) => { 
    const colorBoxes = colors[selected].map((color, idx) => <ColorBox key={idx} {...color}/>);
    
    return (
        <PaletteStyled>  
            <PaletteColorsStyled>
                {colorBoxes}
            </PaletteColorsStyled>
        </PaletteStyled>
    );
};

export default memo(Palette);