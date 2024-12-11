import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./components/Homes";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;