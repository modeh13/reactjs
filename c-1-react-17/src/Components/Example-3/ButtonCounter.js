import React from "react";

function ButtonCounter(props) {
   const onClickHandler = () => props.onClickHandler(props.increment);
   return (
      <button onClick={onClickHandler}>
         +{props.increment}
      </button>
   );
}

export default ButtonCounter;