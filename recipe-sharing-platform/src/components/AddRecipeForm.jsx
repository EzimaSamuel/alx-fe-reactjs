import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!title || !ingredients || !steps) {
      setErrors({
        title: !title ? 'Title is required' : '',
        ingredients: !ingredients ? 'Ingredients are required' : '',
        steps: !steps ? 'Steps are required' : '',
      });
      return;
    }

    // Submit form data
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'),
    };

    console.log('New Recipe Submitted:', newRecipe);

    // Clear form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.ingredients && <p className="text-red-500 text-xs">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.steps && <p className="text-red-500 text-xs">{errors.steps}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
