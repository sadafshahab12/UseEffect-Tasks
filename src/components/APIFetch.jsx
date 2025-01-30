import React, { useEffect, useState } from "react";
import { use } from "react";

const APIFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error in fetching user", error);
        setError("Error in fetching, May be internet slow.");
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h1 className="sm:text-2xl text-lg font-bold text-center py-5">
        UseEffect Clean Up Function -- Task 2 -- API Fetching{" "}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:max-w-6xl w-full mx-auto sm:px-10 px-4">
        {users.map((user, id) => (
          <div
            key={id}
            className="border space-y-3 p-4 bg-white text-black shadow-md"
          >
            <div className="space-y-2">
              <h1 className="text-lg font-bold">{user.name}</h1>
              <p className="text-gray-400 sm:text-sm text-[12px]">{user.username}</p>
            </div>
            <div className="sm:text-sm text-[12px] sm:space-y-2 space-y-1">
              <p className="bg-slate-800 text-white sm:px-5 px-2 py-1 rounded-2xl inline-block sm:text-sm text-[12px]">
                {user.email}
              </p>
              <p>Website : {user.website}</p>
              <p>Company : {user.company.name}</p>
              <p>Catch Phrase : {user.company.catchPhrase}</p>
              <p>City : {user.address.city}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default APIFetch;
