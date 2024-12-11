import React from "react";
import Search from "./Search";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default Home;
