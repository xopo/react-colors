import React from 'react';
import ColorBox from './ColorBox';
import { PaletteFooterStyled } from './Palette';

const SingleColrPalette = ( {colorId, colors, colorFormat, paletteId, emoji} ) => {
    const shades = Object.keys(colors).reduce((ac, range) => {
        if (range === '50') return ac;
        ac.push(colors[range].find(color => color.id === colorId))
        return ac;
    }, []);
    const ShadeList = shades.map(shade => <ColorBox key={`${shade.id}-${shade.hex}`} color={shade[colorFormat]} {...shade} shades/>);
    ShadeList.push(<ColorBox key='goback' color='white' shades> <button>GoBack</button></ColorBox>);
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
