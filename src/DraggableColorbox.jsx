import React from 'react';
import { DraggableColorBoxStyled } from './Styled/StyledComponents';
const DraggableColorbox = ({background}) => {
    return (
        <DraggableColorBoxStyled {...{background}}>
            {background}
        </DraggableColorBoxStyled>
    );
}

export default DraggableColorbox;
