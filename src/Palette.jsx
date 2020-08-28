import React, { memo, useEffect, useRef, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ColorBox from './ColorBox';
import { PaletteStyled, PaletteColorsStyled, PaletteFooterStyled } from './Styled/StyledComponents';

const Palette = ({ palette: { colors, id: paletteId, paletteName, emoji }, selected, colorFormat}) => { 
    const [showInfo, setShowInfo] = useState(false);
    const colorBoxes = colors[selected].map((color) => <ColorBox key={color.id} color={color[colorFormat]} {...color} gradientColorLink={`/palette/${paletteId}/${color.id}`}/>);
    const initialRender = useRef(true);
    
    useEffect(() => {
        if ( initialRender.current) {
            initialRender.current = false;
        } else {
            setShowInfo(colorFormat)
        }
    }, [colorFormat]);

    const closeInfoBar = () => setShowInfo(false);


    return (
        <PaletteStyled>  
            <PaletteColorsStyled>
                {colorBoxes}
            </PaletteColorsStyled>
            <Snackbar   
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                open={showInfo}
                autoHideDuration={2000}
                message={<span id='message-id'> Format Changed to : {colorFormat.toUpperCase()} </span>}
                ContentProps={{'aria-describedby': 'message-id'}}
                action={[
                    <IconButton onClick={closeInfoBar}><CloseIcon/></IconButton>
                ]}
                onClose={closeInfoBar}
            />
            <PaletteFooterStyled>
                {paletteName}  
                <span>{emoji}</span>
            </PaletteFooterStyled>
        </PaletteStyled>
    );
};

export default memo(Palette);