import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos });
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />
          <input
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {userData.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-center text-lg font-semibold mt-2">
              {user.login}
            </h2>
            <p className="text-center text-sm text-gray-600">
              Location: {user.location || "N/A"}
            </p>
            <p className="text-center text-sm text-gray-600">
              Repositories: {user.public_repos}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;