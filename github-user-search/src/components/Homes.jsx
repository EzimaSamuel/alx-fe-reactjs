import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${EzimaSamuel}`);
      setUserData(response.data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError("User not found");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <h2>{userData.name || userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;