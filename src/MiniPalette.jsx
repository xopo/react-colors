import React from 'react';
import styled from 'styled-components';

const MiniStyled = styled.div`

`;

const ColorsStyled = styled.div`
    border: 4px solid #bbb;
    display: inline-flex;
    flex-direction: row;
    max-width: 150px;
    flex-wrap: wrap;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    &:hover {
        cursor: pointer;
    }
`;

const TitleStyled = styled.h5`
    display: flex;
    justify-content: space-between;
`;

const StyledColor = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({color}) => color};
`;

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