import React, { useState } from "react";
// styled component
import { StyledSnakeGame } from "../styles/StyledSnakeGame";
// jsx component
import GameBoard from "./GameBoard";
import { START_SNAKE, DIR, SPEED, X_MAX, Y_MAX } from "../hooks/constants"; 
import { useInterval } from "../hooks/useInterval";


// custom internal style
const textStyle = {
    color: 'white',
    fontSize: '1.3em',
    fontFamily: 'terminalvector',
    justifySelf: 'end',
}

const SnakeGame = () => {

    const appleCordinates = () => {
        let x = Math.floor(Math.random() * (X_MAX - 0 + 1)) + 0;
        let y = Math.floor(Math.random() * (Y_MAX - 0 + 1)) + 0;
        return [x, y];
    }

    const [snake, setSnake] = useState(START_SNAKE);
    const [dir, setDir] = useState([1, 0]);
    const [speed, setSpeed] = useState(SPEED);
    const [apple, setApple] = useState([-99, -99]);
    const [len, setLen] = useState(snake.length);
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(false);
    const [pause, setPause] = useState(false);
    const [prevspeed, setPrevspeed] = useState(200);
    const pauseGame = () => {
        if(pause)
            setSpeed(prevspeed);
        else {
            setPrevspeed(speed);
            setSpeed(null);
        }
        setPause(prev => !prev);
    }

    const endGame = () => {
        setSpeed(null);
        setStart(false);
        setEnd(true);
    }

    const deathCollision = (copy) => {
        let head = copy[copy.length - 1];
        if(head[0] > X_MAX || head[0] < 0 || head[1] > Y_MAX || head[1] < 0) 
            return true;
        for(var i=0; i<copy.length-1; ++i) {
            if(copy[i][0]===head[0] && copy[i][1]===head[1])
                return true;
        }
        return false;
    }

    const increaseSpeed = () => {
        if(speed > 10) {
            setPrevspeed(speed);
            setSpeed(prev => prev-10);
        }
    }

    const appleCollision = (copy) => {
        let head = copy[copy.length -1];
        if(head[0] === apple[0] && head[1] === apple[1]) {
            setApple(appleCordinates);
            setLen(prev => prev+1);
            increaseSpeed();
            return true;
        }
        return false;
    }

    const gameloop = () => {
        if(start) {
            let copy = [...snake];
            let head = copy[copy.length-1];
            head = [head[0] + dir[0], head[1] + dir[1]];
            copy.push(head);
            if(deathCollision(copy)) endGame();
            if(!appleCollision(copy)) copy.shift();
            setSnake(copy);
        }
    }

    const moveSnake = ({keyCode}) => {
        if(keyCode === 32)
            pauseGame();
        if(DIR[keyCode+2] !== dir && DIR[keyCode-2] !== dir)
            keyCode >= 37 && keyCode <= 40 && setDir(DIR[keyCode]);
    }
    
    const startGame = () => {
        console.log("This project is done by Sagar mandal (seeker710).")
        setSnake(START_SNAKE);
        setDir([1, 0]);
        setSpeed(SPEED);
        setApple(appleCordinates);
        setStart(true);
        setEnd(false);
        setPause(false);
    }
    useInterval(() => gameloop(), speed)

    return (
        <StyledSnakeGame role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <GameBoard snake={snake} start={start} end={end} pause={pause} apple={apple} clickable={startGame}></GameBoard>
            <div style={textStyle}>Length: {len}</div>
        </StyledSnakeGame>
    );
}

export default SnakeGame;
