import {css} from 'styled-components';

export const ColorDivSharedStyles = css`
    width: 25%;
    height: 20%;
    background-color: ${({color}) => color};
`;