import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorBoxStyled, CopyButtonStyled, ContainerStyled, ContentStyled, OverlayedStyled, OverlayedMessage, SeeMore } from './Styled/StyledComponents';
import chroma from 'chroma-js';

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
