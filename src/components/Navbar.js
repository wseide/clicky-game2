import React from "react";

function Navbar(props) {
    return (
        <div className="navbar sticky-top">
            <h3 className="navbar-brand">A Memory Game</h3>
            <h3 className="navbar-brand">Click an image to begin!</h3>
            <h3 className="navbar-brand">SCORE: {props.score} | Top Score: {props.topscore}</h3>
        </div>
    );
}

export default Navbar;
