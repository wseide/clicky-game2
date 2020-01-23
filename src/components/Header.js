import React from "react";
import apexLineup from './headerimage.png';

function Header() {
    return (
        <div className="header">
            <img src={apexLineup} alt="Apex" width="850px" height="380px"></img>
            <div className="row">
                <h3 className="mx-auto">Click on an image to earn points, but don't click on any more than once!</h3>
            </div>
            <div className="row space">
                <h3 className="mx-auto">⬇Scroll Down to Begin⬇</h3>
            </div>
        </div>
    );
}

export default Header;