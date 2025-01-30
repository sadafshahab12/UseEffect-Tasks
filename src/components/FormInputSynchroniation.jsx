import React, { useEffect, useState } from "react";

const FormInputSynchroniation = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <div className="bg-orange-500 sm:p-8 p-4 space-y-4">
      <h1 className="sm:text-2xl text-lg font-bold text-center py-5">
        UseEffect Clean Up Function -- Task 5 -- Form Input Synchroniation{" "}
      </h1>
      <input
        type="text"
        placeholder="Write something ..."
        className=" py-2 px-5 outline-none rounded-md w-full text-black"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <p>preview: {inputValue}</p>
    </div>
  );
};

export default FormInputSynchroniation;
