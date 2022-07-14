import React, { useState } from "react";
import Parent from "./Parent";

const GrandParent = () => {
  const [textGP, settextGP] = useState("This is Grand Parent");
  const [accessingchild, setaccessingchild] = useState("This is Child");
  const [sampleText, setsampleText] = useState("Sample Text");
  const handleClick = () => {
    // setaccessingchild("Accessing Child")
    setsampleText("Hello World");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <h1><div>Sample Text Hello Helo Hello</div> <div>{sampleText}</div> <div>Bottom</div></h1>
      {textGP}
      <Parent accessingchildProps={accessingchild}></Parent>
    </div>
  );
};

export default GrandParent;
