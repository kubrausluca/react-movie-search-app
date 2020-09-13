import React, { useState } from 'react'
import axios from 'axios'

// import _ from 'lodash';

import MovieList from './components/Movie/movieList';
import SearchBar from './components/searchBar';
import SelectedMovie from './components/Movie/selectedMovie';


const App = () => {
  const [state, setState] = useState({
    s: ('Pokemon'),
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=7a5af8f2";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search} />

        <MovieList results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <SelectedMovie selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
