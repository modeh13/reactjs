import React from "react";

function ButtonCounter(props) {
   return (
      <button onClick={props.onClickHandler}>+1</button>
   );
}

export default ButtonCounter;