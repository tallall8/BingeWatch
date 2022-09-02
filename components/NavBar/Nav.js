import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const changeBack = () => {
    if (window.scrollY >= 100) handleShow(true);
    else handleShow(false);
  };
  // changeBack function here basically checks that if the scroll in the Y axis is greater than 100 then set show to True
  //else set show to false.

  window.addEventListener("scroll", changeBack);
  //Add an event listener named scroll which calls changeBack function.

  return (
    <div className={`nav nav__fade ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={require("./BINGE-WATCH.png")}
        alt="Binge-Watch"
      />
    </div>
  );
}

export default Nav;
