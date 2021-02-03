import React, { useState } from "react";

import Logo from "./components/Logo";
import Photo from "./components/Photo";

const Main = () => {

  return (
    <>
      <Logo />
      <Photo count={0} file={require("./assets/images/cat.png")} />
      <Photo count={0} file={require("./assets/images/cat2.png")}/>
    </>
    )
}

export default Main;