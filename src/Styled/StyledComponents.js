import styled from 'styled-components';
import {ColorDivSharedStyles} from './helper';

export const StyledColor = styled.div`
    ${ColorDivSharedStyles}
`;

export const PalleteListStyled = styled.div`
    background-color: blue;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    > div { /*container*/ 
        margin-top: 3rem;
        width: 840px;
        height: 90vh;
        outline: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;

        > h1 {
            width: 100%;
            text-align: center;
            color: white;
        }
    }

    ul {
        box-sizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 30%);
        grid-gap: 3.3%;
        list-style: none;
        li {
            box-sizing: border-box;
            > a {
                text-decoration: none;
            }
        }
    }
`;

export const ColorBoxStyled = styled.div`
    margin: 0 auto;
    display: inline-block;
    position: relative;
    margin-bottom: -3.5px;
    ${ColorDivSharedStyles};
    ${ ({shades}) => shades && `
        width: 20%;
        height: 44%;
    `}
    ${({endBox}) => endBox && `
        position: absolute;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
           left: 0;
           opacity: 1;
           z-index: 1;
           a {
               color: white;
               text-decoration: none;
           }
        }
    `}
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        /* outline: 1px solid rgba(0, 0, 0, 0.2); */
        /* box-shadow: -1px -1px 1px white; */
        border-left: 1px solid rgba(0,0,0,0.2);
        border-top: 1px solid rgba(0,0,0,0.2);
        box-shadow: -1px -1px 1px rgba(255,255, 255, 0.3);
    }
`;

export const ContainerStyled = styled.div`
`;

export const ContentStyled = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: ${ ({ isDark })=> isDark ? 'white' : 'black' };
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1vw;
`;

export const CopyButtonStyled = styled.button`
    width: 100px;
    height: 30px;
    position: absolute;
    top: 50%;
    margin: 0 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    line-height: 28px;
    color: black;
    opacity: 0;
    
    ${ColorBoxStyled}:hover & {
        opacity: 1;
        transition: 0.5s;
    };
`;

export const OverlayedStyled = styled.div`
    background-color: ${({ color }) => color};
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: scale(0.1);
    
    ${({expand}) => expand ? `
        opacity: 1;
        transform: scale(50);
        z-index: 10;
        position: absolute;
    ` : ''
    }
`;

export const OverlayedMessage = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transform: scale(${({show}) => show ? 1 : 0.1});
    opacity: ${({show}) => show ? 1 : 0};
    color: ${ ({ isDark })=> isDark ? 'white' : 'black' };
    z-index: ${({show}) => show ? 10 : 0};

    h1 {
        font-weight: 400;
        text-shadow: 1px 2px black;
        background: rgba(255, 255, 255, 0.2);
        width: 100%;
        text-align: center;
        padding: 1rem;
    }

    p {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 200;
    }
`;

export const SeeMore = styled.span`
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    border: none;
    right: 0;
    bottom: 0;
    width: 35%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 1vw;
    cursor: pointer;
    z-index: 1;
    color: ${ ({ isDark })=> isDark ? 'white' : 'black' };
`;

export const MiniStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 10px;
    padding: 5px;
    width: 207px;
`;

export const ColorsStyled = styled.div`
    width: 200px;
    height: 150px;
    border: 4px solid white;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    &:hover {
        cursor: pointer;
    }
`;

export const TitleStyled = styled.h5`
    display: flex;
    margin: 0;
    background: white;
    justify-content: space-between;
    text-decoration: none;
    border-radius: 9px;
    padding: 5px 0 0 0;
    width: 95%;
    background: white;
    color: #333;
`;


export const PaletteStyled = styled.div`
    height: calc(100vh - 140px );
`;

export const PaletteColorsStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`;

export const PaletteFooterStyled = styled.div`
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


export const SliderStyled = styled.div`
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
export const NavTitleStyled = styled.h3`
    display: inline-block;
    width: 250px;
    margin-left: 30px;
    padding: 30px;
    margin: 0;
    background-color: rgb(255,236,248);
`;
export const SelectStyled = styled.div`
    align-self: center;
    margin-left: auto;
    margin-right: 20px;
`;
export const NavStyled = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;