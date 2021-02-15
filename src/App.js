import {useState, useEffect} from 'react';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = '3a1d88aa';
  const APP_KEY = '985c82dd6cbaa95484c6203a6a281e2f';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
    getRecipes();
  }, [query]);

  const getRecipes = async ()=>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch =(e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit = {getSearch} className='search-form'>
        <input 
          className='search-bar'
          type="search" 
          placeholder='Search...'
          value={search}
          onChange = {(e)=>setSearch(e.target.value)}
        />
        <button className='search-btn' type='submit'>Search</button>
      </form>

      {loading && <p>Fetching recipes...</p>}

      <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe
            key = {recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div> 
  );
}

export default App;
