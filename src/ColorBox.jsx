import React, { memo } from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

const ColorBoxStyled = styled.div`
    width: 20%;
    height: 25%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    background: ${props => props.color};
`;

const ColorBox = memo(function ColorBox({name, color}) {
    return (
        <ColorBoxStyled color={color}>
            <span>{name}</span>
            <span>More</span>
        </ColorBoxStyled>
    )
})

// ColorBox.propTypes = {

// }

export default ColorBox
