import React from 'react';
import { Link } from 'react-router-dom';
import Slider  from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css'
import styled from 'styled-components';

const SliderStyled = styled.div`
  margin-left: 1em;
  width: 300px;
  display: flex;
  align-items: center;
  .rc-slider {
    width: 60%;
    display: inline-block;
    margin-left: 30px;
  }
`;
const TitleStyled = styled.h3`
    display: inline-block;
    width: 250px;
    margin-left: 30px;
    padding: 30px;
    margin: 0;
    background-color: rgb(255,236,248);
`;
const SelectStyled = styled.div`
    align-self: center;
    margin-left: auto;
    margin-right: 20px;
`;
const NavStyled = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const Navbar = ({level, setLevel, colorFormat, changeColorFormat}) => (
    <NavStyled>
        <TitleStyled>
            <Link to='/'>Hello World of colors !!! </Link>
        </TitleStyled>
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