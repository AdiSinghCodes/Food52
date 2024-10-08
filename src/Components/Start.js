import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Start.css';

const Start = () => {
  const [recipes, setRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [mustTryRecipes, setMustTryRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [likedRecipes, setLikedRecipes] = useState({});

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const fetchedRecipes = response.data.meals || [];
        setPopularRecipes(fetchedRecipes.slice(0, 5));
        setLatestRecipes(fetchedRecipes.slice(5, 10));
        setMustTryRecipes(fetchedRecipes.slice(10, 15));
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to fetch recipes. Please try again later.');
      }
    };
    fetchRecipes();
  }, []);

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        if (response.data.meals) {
          setSearchResults(response.data.meals);
          setError('');
        } else {
          setSearchResults([]);
          setError('No recipes found. Please try a different search term.');
        }
      } catch (error) {
        console.error('Error searching recipes:', error);
        setError('An error occurred while searching. Please try again.');
      }
    }
  };

  
  const handleLike = (recipeId) => {
    setLikedRecipes(prev => ({
      ...prev,
      [recipeId]: true
    }));
    setTimeout(() => {
      setLikedRecipes(prev => ({
        ...prev,
        [recipeId]: false
      }));
    }, 96000);
  };

  const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <button 
        className={`like-button ${likedRecipes[recipe.idMeal] ? 'liked' : ''}`}
        onClick={(e) => { 
          e.stopPropagation(); 
          handleLike(recipe.idMeal); 
        }}
      >
        {likedRecipes[recipe.idMeal] ? 'Liked!' : 'Like'}
      </button>
    </div>
  );

  return (
    <div className="recipes-container">
      <div className="recipe-columns">
        <br></br>
        <br></br>
        <h2>Latest Recipes</h2>
        <div className="recipe-row">
          {latestRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

        <h2>Popular Recipes</h2>
        <div className="recipe-row">
          {popularRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

        <h2>Must-Try Recipes</h2>
        <div className="recipe-row">
          {mustTryRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>

      <div className="search-section">
        <h2>Search Recipes</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Search Results</h3>
            <div className="recipe-row">
              {searchResults.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedRecipe && (
        <div className="recipe-detail">
          <h2>{selectedRecipe.strMeal}</h2>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
          <h3>Ingredients:</h3>
          <ul>
            {Object.keys(selectedRecipe)
              .filter(key => key.startsWith('strIngredient') && selectedRecipe[key])
              .map((key, index) => (
                <li key={index}>
                  {selectedRecipe[key]} - {selectedRecipe[`strMeasure${key.slice(13)}`]}
                </li>
              ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{selectedRecipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Start;