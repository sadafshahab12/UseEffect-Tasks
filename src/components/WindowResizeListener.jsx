import React, { useEffect, useState } from "react";

const WindowResizeListener = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="px-10 text-center">
          <h1 className="text-2xl font-bold text-center py-5">UseEffect Clean Up Function -- Task 3 -- Window Resize Listener </h1>
      <p className="bg-red-500 text-white py-2 px-4 rounded-md w-full">Window Size: {width}px</p>
    </div>
  );
};

export default WindowResizeListener;
