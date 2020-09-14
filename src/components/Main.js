import React, {Component} from 'react';
import axios from 'axios';
import '../components/Style/main.scss';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/Movie/MovieList';
import SelectedMovie from '../components/Movie/SelectedMovie';
import Footer from '../components/Footer/Footer';

const API_KEY = "7a5af8f2";

export function searchMovies(searchTerm, pageNumber) {
  if(searchTerm) {
    let url = `https://www.omdbapi.com/?s=${searchTerm}&page=${pageNumber}&apikey=${API_KEY}`
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(response => {
        return resolve({
          search: response.data.Search || response.data.Error,
          response: response.data.Response,
          totalResults: response.data.totalResults
        });
      })
       .catch(error => {
         console.log(error)
        return reject(error);
      });
    })  
  }
};


export function getMovie(title, year) {
  let url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=${API_KEY}`
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
      return resolve(response.data)
    })
    .catch(error => {
      return reject(console.log(error));
    })
  })
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {},
      searchTerm: '',
      activePage: 1,
      showMovie: false,
      showMovies: false,
      showPlaceholder: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowMovie = this.handleShowMovie.bind(this);
    this.handleFloatButton = this.handleFloatButton.bind(this);
  }
    

  handleSearch(searchTerm, pageNumber=1) {
    searchMovies(searchTerm, pageNumber).then(data => { 
      let movies = [];
      movies = [data];
      this.setState(
        { 
          movies, 
          searchTerm, 
          activePage: pageNumber, 
          showMovie: false, 
          showMovies: true,
          showPlaceholder: false
        });
    })
    .catch(error => 
      console.log(error)
    )  
  }
  
  handleShowMovie(title, year){
    getMovie(title, year).then(data => {
      let movie = {};
      movie = {...data};
      this.setState({ movie, showMovie: true, showMovies: false });
    })
  }

  handleFloatButton() {
    this.setState({ showMovie: false, showMovies: true });
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <SearchBar handleSearch={this.handleSearch} />
        {this.state.showPlaceholder && (
          <div className="container">
            <h1 className="flex placeholder">Please enter a search term above...</h1>
          </div>
        )}
        {this.state.showMovies && (
          <MovieList
            movies={this.state.movies}
            handleShowMovie={this.handleShowMovie}
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            activePage={this.state.activePage}
          />
        )}
        {this.state.showMovie && (
          <SelectedMovie
            movieInfo={this.state.movie}
            handleFloatButton={this.handleFloatButton}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
