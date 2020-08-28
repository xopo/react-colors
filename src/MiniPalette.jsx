import React from 'react';
import { ColorsStyled, MiniStyled, StyledColor, TitleStyled } from './Styled/StyledComponents';

const MiniPalette = ({ paletteName, id, emoji, colors }) => (
    <MiniStyled>
        <ColorsStyled>
            { 
                colors.map(({name, color}) => ( <StyledColor key={`${name}${color}`} color={color} /> ))
            }
        </ColorsStyled>
        <TitleStyled>{paletteName} <span>{emoji}</span></TitleStyled>
    </MiniStyled>
);

export default MiniPalette;