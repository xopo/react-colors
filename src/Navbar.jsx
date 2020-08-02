import React from 'react';
import Slider  from 'rc-slider';
import 'rc-slider/assets/index.css'
import style from 'styled-components';

const SliderStyled = style.div`
  margin-left: 1em;
  width: 300px;
  display: inline-block;
  .rc-slider {
    width: 60%;
    display: inline-block;
    margin-left: 30px;
  }
`;
const TitleStyled = style.h3`
  display: inline-block;
  width: 250px;
`;
const Navbar = ({level, setLevel}) => {
    return (
        <div>
            <TitleStyled>
                Hello World of colors !!!
            </TitleStyled>
            <SliderStyled>
                Level: {level}
                <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={newLevel => setLevel(newLevel) }/> 
            </SliderStyled>
        </div>
    );
}

export default Navbar;