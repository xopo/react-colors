import React from 'react';
import styled from 'styled-components';

const MiniStyled = styled.div`

`;


const MiniPalette = ({ paletteName, id, emoji, colors }) => (
    <MiniStyled>
        <h3>{paletteName}</h3>
    </MiniStyled>
);

export default MiniPalette;