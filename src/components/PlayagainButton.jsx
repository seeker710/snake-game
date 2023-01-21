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
    zindex: '3',
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
    width: '9em',
    margin: 'auto',
    cursor: 'pointer',
}
let styleDiv_1 = {
    display: 'none',
}

const PlayagainButton = ({run, clickable}) => {
    const [start, setStart] = useState(false);
    let click = run;
    styleButton = start ?
        { ...styleButton, color: 'rgb(211, 255, 17)', border: '5px solid rgb(211, 255, 17)' } :
        { ...styleButton, color: '#9bbc0f', border: '5px solid #9bbc0f' };

    return (
        <div style={!click ? styleDiv : styleDiv_1}>
            <h1 style={styleH1}>You died :(</h1>
            <p style={styleP}>But I'm sure you can do better next time!</p>
            <div style={styleButton}
                onMouseEnter={() => setStart(true)}
                onMouseLeave={() => setStart(false)}
                onClick={clickable}>
                Play Again?
            </div>
        </div>
    );
}

export default PlayagainButton;