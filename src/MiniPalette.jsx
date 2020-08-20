import React from 'react';
import styled, { css } from 'styled-components';
const { div, h5 } = styled;

const MiniStyled = div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 10px;
    padding: 5px;
    width: 207px;
`;

const ColorsStyled = div`
    width: 200px;
    height: 150px;
    border: 4px solid white;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    &:hover {
        cursor: pointer;
    }
`;

const TitleStyled = h5`
    display: flex;
    margin: 0;
    background: white;
    justify-content: space-between;
    text-decoration: none;
    border-radius: 9px;
    padding: 5px 0 0 0;
    width: 95%;
    background: white;
    color: #333;
`;

export const ColorDivSharedStyles = css`
    width: 25%;
    height: 20%;
    background-color: ${({color}) => color};
`;

const StyledColor = div`
    ${ColorDivSharedStyles}
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