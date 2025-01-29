import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>click me</button>
    </div>
  );
};

export default Counter;
