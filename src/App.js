import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'd2339bbf';
  const APP_KEY = '031ceed39e60a0a66da5226abf482345';


useEffect(() => {
  getRecipes();
}, []);

const getRecipes = async () => {
 const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
 const data = await response.json();
 console.log(data);
}

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default App;
