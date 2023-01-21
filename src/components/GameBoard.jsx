import React from "react";
import { StyledGameBoard } from "../styles/StyledGameBoard";
import StartButton from "./StartButton";
import SnakeBlock from "./SnakeBlock";
import AppleBlock from "./AppleBlock";
import PlayagainButton from "./PlayagainButton";
import PauseBox from "./PauseBox";
const GameBoard = ({snake, start, end, pause, apple, clickable}) => {
    // console.log(start);
    return (
        <StyledGameBoard>
            {pause && <PauseBox/>}
            {end ? <PlayagainButton clickable={clickable}></PlayagainButton> 
            : <StartButton run={start} clickable={clickable}></StartButton>}            
            <SnakeBlock snake={snake}></SnakeBlock>
            <AppleBlock apple={apple}></AppleBlock>
        </StyledGameBoard>
    );
}

export default GameBoard;
