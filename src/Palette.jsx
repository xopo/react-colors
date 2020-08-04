import React, { memo, useEffect, useRef, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import style from 'styled-components';
import ColorBox from './ColorBox';

const PaletteStyled = style.div`
    height: calc(100vh - 140px );
`;

const PaletteColorsStyled = style.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`;

const PaletteFooterStyled = style.div`
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
        font-size: 1.5em;
        display: inline-block;
        text-align: center;
        padding: 0 20px;
    }
`;

const Palette = ({ palette: { colors, paletteName, emoji }, selected, colorFormat}) => { 
    const [showInfo, setShowInfo] = useState(false);
    const colorBoxes = colors[selected].map((color, idx) => <ColorBox key={idx} color={color[colorFormat]} {...color}/>);
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