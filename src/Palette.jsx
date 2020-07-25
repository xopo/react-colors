import React, { memo } from 'react';
import style from 'styled-components';
import ColorBox from './ColorBox';

const PaletteStyled = style.div`
    height: 100vh;
`;

const PaletteColorsStyled = style.div`
    height: 100%;
`;

const Palette = ({ palette: { colors, emoji, id, paleteName } }) => { 
    console.log({colors})
    const colorBoxes = colors.map(color => <ColorBox { ...color }/>);
    return (
        <PaletteStyled>
            
            <PaletteColorsStyled>
                {colorBoxes}
            </PaletteColorsStyled>
        </PaletteStyled>
    );
};

export default memo(Palette);