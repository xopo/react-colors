import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styled from 'styled-components';

const PalleteListStyled = styled.div`
    background-color: blue;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
   

    > div { /*container*/ 
        margin-top: 3rem;
        width: 840px;
        outline: 1px solid white;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
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

const PaletteList = ({palettes, history}) => { console.log({palettes}); return (
    <PalleteListStyled>
        <div>
            <h1>React Colors</h1>
            <ul>
                {palettes.map(palette => (
                <li key={palette.id}>
                    <Link 
                        onClick={() => history.push(`/palette/${palette.id}`)}
                        to={`/palette/${palette.id}`} 
                        key={palette.id}>
                        <MiniPalette {...palette} />
                    </Link>
                </li>))}
            </ul>
        </div>
    </PalleteListStyled>
)};

export default PaletteList;