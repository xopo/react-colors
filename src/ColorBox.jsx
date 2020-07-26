import React, { memo } from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

const ColorBoxStyled = styled.div`
    width: 20%;
    height: 25%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    background: ${props => props.color};
    margin-bottom: -3.5px;


    /* see more span */
    > span {
        background: rgba(255, 255, 255, 0.3);
        position: absolute;
        border: none;
        right: 0;
        bottom: 0;
        color: white;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
`;
const ContainerStyled = styled.div`
`;
const ContentStyled = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
`;
const CopyButtonStyled = styled.button`
    width: 100px;
    height: 30px;
    position: absolute;
    top: 50%;
    margin: 0 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    line-height: 28px;
    color: white;
    opacity: 0;
    
    ${ColorBoxStyled}:hover & {
        opacity: 1;
        transition: 0.5s;
    };
`;

const ColorBox = memo(function ColorBox({name, color}) {
    return (
        <ColorBoxStyled color={color}>
            <ContainerStyled>
                <ContentStyled>
                    <span>{name}</span>
                </ContentStyled>
                <CopyButtonStyled>copy</CopyButtonStyled>
            </ContainerStyled>
            <span>See more</span>
        </ColorBoxStyled>
    )
})

// ColorBox.propTypes = {

// }

export default ColorBox
