import React from 'react';
import ColorBox from './ColorBox';
import { CopyButtonStyled, PaletteFooterStyled } from './Styled/StyledComponents';
import { Link } from 'react-router-dom';

const SingleColrPalette = ( {colorId, colors, colorFormat, paletteId, emoji} ) => {
    const shades = Object.keys(colors).reduce((ac, range) => {
        if (range === '50') return ac;
        ac.push(colors[range].find(color => color.id === colorId))
        return ac;
    }, []);
    const ShadeList = shades.map(shade => <ColorBox key={`${shade.id}-${shade.hex}`} color={shade[colorFormat]} {...shade} shades/>);
    ShadeList.push(
        <ColorBox key='goback' color='black' shades endBox> 
            <CopyButtonStyled>
                <Link to={`/palette/${paletteId}`}>
                    GoBack
                </Link>
            </CopyButtonStyled>
        </ColorBox>
    );
    return (
        [
            ShadeList,
            <PaletteFooterStyled key='footer'>
                {`${colorId} from ${paletteId}`}
                <span>{emoji}</span>
            </PaletteFooterStyled>
        ]
    );
}

export default SingleColrPalette;
