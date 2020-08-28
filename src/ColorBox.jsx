import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorDivSharedStyles } from './MiniPalette';
import chroma from 'chroma-js';

const ColorBoxStyled = styled.div`
    margin: 0 auto;
    display: inline-block;
    position: relative;
    margin-bottom: -3.5px;
    ${ColorDivSharedStyles};
    ${ ({shades}) => shades && `
        width: 20%;
        height: 44%;
    `}
    ${({endBox}) => endBox && `
        position: absolute;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
           left: 0;
           opacity: 1;
           z-index: 1;
           a {
               color: white;
               text-decoration: none;
           }
        }
    `}
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        /* outline: 1px solid rgba(0, 0, 0, 0.2); */
        /* box-shadow: -1px -1px 1px white; */
        border-left: 1px solid rgba(0,0,0,0.2);
        border-top: 1px solid rgba(0,0,0,0.2);
        box-shadow: -1px -1px 1px rgba(255,255, 255, 0.3);
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
    color: ${ ({ isDark })=> isDark ? 'white' : 'black' };
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1vw;
`;
export const CopyButtonStyled = styled.button`
    width: 100px;
    height: 30px;
    position: absolute;
    top: 50%;
    margin: 0 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    line-height: 28px;
    color: black;
    opacity: 0;
    
    ${ColorBoxStyled}:hover & {
        opacity: 1;
        transition: 0.5s;
    };
`;
const OverlayedStyled = styled.div`
    background-color: ${({ color }) => color};
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: scale(0.1);
    
    ${({expand}) => expand ? `
        opacity: 1;
        transform: scale(50);
        z-index: 10;
        position: absolute;
    ` : ''
    }
`;
const OverlayedMessage = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transform: scale(${({show}) => show ? 1 : 0.1});
    opacity: ${({show}) => show ? 1 : 0};
    color: ${ ({ isDark })=> isDark ? 'white' : 'black' };
    z-index: ${({show}) => show ? 10 : 0};

    h1 {
        font-weight: 400;
        text-shadow: 1px 2px black;
        background: rgba(255, 255, 255, 0.2);
        width: 100%;
        text-align: center;
        padding: 1rem;
    }

    p {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 200;
    }
`;

const SeeMore = styled.span`
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    border: none;
    right: 0;
    bottom: 0;
    width: 35%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 1vw;
    cursor: pointer;
    z-index: 1;
    color: ${ ({ isDark })=> isDark ? 'white' : 'black' };
`;

const ColorBox = memo(function ColorBox({color, name, gradientColorLink, shades, children, endBox}) {
    const [copied, setCopied] = useState(false);
    const copyColour = () => {
        setCopied(true);
        const timer = setTimeout(() => {
            setCopied(false);
            clearTimeout(timer);
        }, 1000);
    }
    const luminance = chroma(color).luminance();
    const isDarkColor = luminance < 0.2;
    const isLightColor = luminance > 0.5;

    // console.log(color, name, isDarkColor, isLightColor, luminance)

    const styledContent = (
        <>
            <OverlayedStyled color={color} expand={copied} />
            <OverlayedMessage show={copied} isDark={isDarkColor}>
                <h1>copied!</h1>
                <p>{`${name} - ${color}`}</p>
            </OverlayedMessage>
            <ContainerStyled>
                <ContentStyled isDark={isDarkColor}>
                    <span>{name}</span>
                </ContentStyled>
                <CopyButtonStyled isLight={isLightColor}>copy</CopyButtonStyled>
            </ContainerStyled>
            { gradientColorLink && (
                <Link onClick={e => e.stopPropagation()} to={gradientColorLink}>
                    <SeeMore isDark={isDarkColor}>See more</SeeMore>
                </Link>
            )}
        </>
    );
    
    return (
        <CopyToClipboard text={color} onCopy={copyColour}>
            <ColorBoxStyled { ... {color, shades, endBox} } >
                { children ? children : styledContent }
            </ColorBoxStyled>
        </CopyToClipboard>
    )
})

export default ColorBox
