import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
  const imgRef = useRef(null);

  return <div>
    <img alt="Writer Image" ref={imgRef}
         src={primaryImg}
         onMouseOver={() => { imgRef.current.src = secondaryImg }}
         onMouseOut={() => {imgRef.current.src = primaryImg }}
      />
  </div>
};

export default ImageToggleOnMouseOver;
