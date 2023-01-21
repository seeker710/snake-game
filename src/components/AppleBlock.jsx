import React from "react";
import { StyledSnakeBlock } from "../styles/StyledSnakeBlock";

const AppleBlock = ({apple}) => {

    const style = {
        left: `${apple[0]}em`,
        top: `${apple[1]}em`,
        background: '#870300',
    }
    return(
        <StyledSnakeBlock style={style}></StyledSnakeBlock>
    );
}

export default AppleBlock;