import React from "react";
import { StyledSnakeBlock } from "../styles/StyledSnakeBlock";

const SnakeBlock = ({snake}) => {
    // console.log(snake);

    return (
        snake.map((array, i) => {
            const style = {
                left: `${array[0]}em`,
                top: `${array[1]}em`,
            }
            return (
                <StyledSnakeBlock style={style} key={i}></StyledSnakeBlock>
            );
        })
    );
}

export default SnakeBlock;