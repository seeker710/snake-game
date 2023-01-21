import React, { useState } from "react";
// custom internal style
let styleDiv = {
    justifySelf: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    background: '#222',
    color: 'rgb(211, 255, 17)',
    fontFamily: 'terminalvector',
    padding: '2em',
    width: '35%',
    zIndex: '3',
}
const styleH1 = {
    fontSize: '250%',
}
const styleP = {
    fontSize: '130%',
    fontWeight: '200'
}
let styleButton = {
    background: 'inherit',
    color: '#9bbc0f',
    border: '5px solid #9bbc0f',
    fontSize: '145%',
    fontFamily: 'terminalvector',
    padding: '10px',
    width: '7em',
    margin: 'auto',
    cursor: 'pointer',
}
let styleDiv_1 = {
    display: 'none',
}

const StartButton = ({run, clickable}) => {
    const [start, setStart] = useState(false);
    let click = run;
    styleButton = start ?
        { ...styleButton, color: 'rgb(211, 255, 17)', border: '5px solid rgb(211, 255, 17)' } :
        { ...styleButton, color: '#9bbc0f', border: '5px solid #9bbc0f' };

    return (
        <div style={!click ? styleDiv : styleDiv_1}>
            <h1 style={styleH1}>Retro Snake</h1>
            <p style={styleP}>Use the arrow keys of your keyboard to move the snake</p>
            <div style={styleButton}
                onMouseEnter={() => setStart(true)}
                onMouseLeave={() => setStart(false)}
                onClick={clickable}>
                Play Game
            </div>
        </div>
    );
}

export default StartButton;