import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; // Import the recipe data

const HomePage = () => {
  // State to hold recipes
  const [recipes, setRecipes] = useState([]);

  // Effect to load the data when the component mounts
  useEffect(() => {
    setRecipes(recipeData); // Directly setting the mock data as this is a simple example
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
