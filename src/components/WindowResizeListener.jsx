import React, { useEffect, useState } from "react";

const WindowResizeListener = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize)
    // clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <p>Window Size: {width}</p>
    </div>
  );
};

export default WindowResizeListener;
