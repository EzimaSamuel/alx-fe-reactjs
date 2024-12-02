import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
