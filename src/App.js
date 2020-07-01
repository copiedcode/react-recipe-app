import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js';
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const  [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
 const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
 const data = await response.json();
 setRecipes(data.hits);
 console.log(data.hits)
};

const updateSearch = e => {
    setSearch(e.target.value);
}


const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

  return(
    <div className="App">
        <h1>Raphael's Kitchen</h1>
        <p className="centertext">Lets search for some nice recipes...</p>
          <form className="search-form" onSubmit={getSearch}>
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={parseInt(recipe.recipe.calories).toString()}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          dietLabels={recipe.recipe.dietLabels}
          link={recipe.recipe.url}
          servings={recipe.recipe.yield}
        />
      ))}
        </div>
    </div>
  )
}

export default App;
