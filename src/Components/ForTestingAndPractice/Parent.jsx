import React, { useState } from "react";
import Children from "./Children";

const Parent = (props) => {
  const [textP, settextP] = useState("This is Parent");


  
  return (
    <div>
      {textP}
      <Children accessingchildProps={props.accessingchildProps}></Children>
    </div>
  );
};

export default Parent;
