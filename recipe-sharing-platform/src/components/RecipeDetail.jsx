import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Import the mock recipe data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  // Fetch the recipe data when the component mounts
  useEffect(() => {
    const recipeDetails = recipeData.find((r) => r.id === parseInt(id)); // Find the recipe by ID
    setRecipe(recipeDetails);
  }, [id]);

  // If recipe is not found, return a loading state or error message
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{recipe.title}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recipe Image */}
        <div className="w-full h-80 overflow-hidden rounded-lg shadow-md">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Recipe Information */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {/* Assuming ingredients is an array in your JSON file */}
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Cooking Instructions Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Cooking Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {/* Assuming instructions is an array in your JSON file */}
              {recipe.instructions?.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
