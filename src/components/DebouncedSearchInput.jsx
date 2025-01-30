import React, { useEffect, useState } from "react";

const DebouncedSearchInput = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);
  return (
    <div className="p-5 bg-blue-600 text-white">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-slate-700 py-2 px-5 outline-none rounded-md"
      />
      <p>Debounce query : {debouncedQuery}</p>
    </div>
  );
};

export default DebouncedSearchInput;
