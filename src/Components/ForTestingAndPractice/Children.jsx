import React, { useState } from "react";

const Children = (props) => {
  const [textC, settextC] = useState("This is Child");
  return <div>{props.accessingchildProps}</div>;
};

export default Children;
