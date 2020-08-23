import React from 'react';
import ColorBox from './ColorBox';


const SingleColrPalette = ( {colorId, colors, colorFormat} ) => {
    const shades = Object.keys(colors).reduce((ac, range) => {
        if (range === '50') return ac;
        ac.push(colors[range].find(color => color.id === colorId))
        return ac;
    }, []);
    return (
        shades.map(shade => <ColorBox key={`${shade.id}-${shade.hex}`} color={shade[colorFormat]} {...shade} />)
    );
}

export default SingleColrPalette;
