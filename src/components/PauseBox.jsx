import React from "react";
// custom internal style
let styleDiv = {
    justifySelf: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    background: '#222',
    color: 'rgb(211, 255, 17)',
    fontFamily: 'terminalvector',
    padding: '1em',
    width: '35%',
    zIndex: '3',
}
const styleH3 = {
    fontSize: '175%',
}
const styleP = {
    fontSize: '130%',
    fontWeight: '200'
}

const PauseBox = () => {
    return (
        <div style={styleDiv}>
            <h3 style={styleH3}>[Paused]</h3>
            <p style={styleP}>Some interrupt occured? Press [space] to unpause.</p>
        </div>
    );
}

export default PauseBox;