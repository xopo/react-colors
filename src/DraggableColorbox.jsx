import React from 'react';
import { DraggableColorBoxStyled } from './Styled/StyledComponents';
const DraggableColorbox = ({ background, name }) => {
    return (
        <DraggableColorBoxStyled {...{background}}>
            {name}
        </DraggableColorBoxStyled>
    );
}

export default DraggableColorbox;
