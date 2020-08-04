import React, { memo, useState } from 'react'
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import PropTypes from 'prop-types'

const ColorBoxStyled = styled.div`
    width: 20%;
    height: 25%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    background: ${({ color }) => color};
    margin-bottom: -3.5px;


    /* see more span */
    > span {
        background: rgba(255, 255, 255, 0.3);
        position: absolute;
        border: none;
        right: 0;
        bottom: 0;
        color: white;
        width: 35%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 1vw;
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
    font-size: 1vw;
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
    color: white;
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

const ColorBox = memo(function ColorBox({color, id, name}) {
    const [copied, setCopied] = useState(false);
    const copyColour = () => {
        setCopied(true);
        const timer = setTimeout(() => {
            setCopied(false);
            clearTimeout(timer);
        }, 1000);
    }
    
    return (
        <CopyToClipboard text={color} onCopy={copyColour}>
            <ColorBoxStyled color={color}>
                <OverlayedStyled color={color} expand={copied} />
                <OverlayedMessage show={copied}>
                    <h1>copied!</h1>
                    <p>{`${name} - ${color}`}</p>
                </OverlayedMessage>
                <ContainerStyled>
                    <ContentStyled>
                        <span>{name}</span>
                    </ContentStyled>
                    <CopyButtonStyled>copy</CopyButtonStyled>
                </ContainerStyled>
                <span>See more</span>
            </ColorBoxStyled>
        </CopyToClipboard>
    )
})

// ColorBox.propTypes = {

// }

export default ColorBox
