import React from "react";
import MathUtils from "../../js/MathUtils";

function StarsDisplay(props) {
   return (
      <>
         {MathUtils
            .range(1, props.numberOfStars)
            .map(starNumber => <div key={starNumber} className="star"></div>)}         
      </>
   );
}

export default StarsDisplay;