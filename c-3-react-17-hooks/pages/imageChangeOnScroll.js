import React, {useEffect, useState} from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const imageChangeOnScroll = () => {
  const images = ["charles-dickens.jpg", "jk-rowling.jpg", "joseph-conrad.PNG", "mark-twain.jpg", "william-shakespeare.jpg"];
  const [mouseOverCount, setMouseOverCount] = useState(0);
  const [currentWriterName, setCurrentWriterName] = useState("");

  useEffect(() => {
    window.document.title = `Current Writer - ${currentWriterName}`;
    console.log("useEffect", currentWriterName);
  }, [currentWriterName]);

  return (
    <div>
      <span>Mouse over count: {mouseOverCount}</span>
      {images.map((image, index) =>
        (
          <div key={index} onMouseOver={() => {
            setCurrentWriterName(image);
            setMouseOverCount(mouseOverCount + 1);
            console.log("onMouseOver", index);
          }}>
            <ImageToggleOnScroll key={index} primaryImg={"static/" + image} secondaryImg="static/stephen-king.jpg" />
          </div>
        )
      )}
    </div>
  );
}

export default imageChangeOnScroll;
