import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation
import recipeData from '../data.json'; // Import the mock recipe data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load the recipes when the component mounts
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Recipe Sharing Platform</h1>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>

              {/* Link to Recipe Detail Page */}
              <Link
                to={`/recipe/${recipe.id}`} // Link to the RecipeDetail page with the recipe ID
                className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

