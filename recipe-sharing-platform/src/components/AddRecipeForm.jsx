import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  // Validate the form fields
  const validate = () => {
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return false;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Handle successful form submission (e.g., save the recipe)
      console.log("Recipe submitted:", { title, ingredients, steps });
      // Clear form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add a New Recipe
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded-lg shadow-lg"
      >
        {/* Title Input */}
        <div>
          <label className="block mb-2 font-medium text-gray-800">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block mb-2 font-medium text-gray-800">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients"
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* Preparation Steps Textarea */}
        <div>
          <label className="block mb-2 font-medium text-gray-800">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter preparation steps"
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
