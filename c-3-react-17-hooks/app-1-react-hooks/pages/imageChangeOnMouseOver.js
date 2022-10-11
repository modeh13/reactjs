import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const imageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="static/mark-twain.jpg"
        secondaryImg="static/stephen-king.jpg"/>
    </div>
  );
}

export default imageChangeOnMouseOver;
