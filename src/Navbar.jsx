import React from 'react';
import { Link } from 'react-router-dom';
import Slider  from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css'
import { NavStyled, NavTitleStyled, SelectStyled, SliderStyled } from './Styled/StyledComponents';

const Navbar = ({level, setLevel, colorFormat, changeColorFormat}) => (
    <NavStyled>
        <NavTitleStyled>
            <Link to='/'>Hello World of colors !!! </Link>
        </NavTitleStyled>
        { level && (
            <SliderStyled>
            Level: {level}
                <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={newLevel => setLevel(newLevel) }/> 
            </SliderStyled>
        )}
        <SelectStyled>
            <Select value={colorFormat} onChange={(ev) => changeColorFormat(ev.target.value)}>
                <MenuItem value='hex'>Hex - #ffffff</MenuItem>
                <MenuItem value='rgb'>Rgb - rgb(233,43,24)</MenuItem>
                <MenuItem value='rgba'>Rgba - rgba(233,43,24, 0.3)</MenuItem>
            </Select>
        </SelectStyled>
    </NavStyled>
);

export default Navbar;