import React, { useEffect, useState } from "react";

const DebouncedSearchInput = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);
  return (
    <div className="sm:p-5 p-3 bg-pink-400 text-slate-700 space-y-3">
      <h1 className="sm:text-2xl text-lg font-bold text-center py-5">
        UseEffect Clean Up Function -- Task 8 -- Debounce Search Input{" "}
      </h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" py-2 px-5 outline-none rounded-md w-full"
      />
      <p>Debounce query : {debouncedQuery}</p>
    </div>
  );
};

export default DebouncedSearchInput;
