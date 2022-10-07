import React, {useEffect, useRef, useState} from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const isInView = () => {
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
  const scrollHandler = () => {
    setInView(isInView());
  };

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, []);

  return <div>
    <img alt="Writer Image" ref={imgRef}
         src={inView ? primaryImg : secondaryImg}
      />
  </div>
};

export default ImageToggleOnScroll;
