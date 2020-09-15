import React from 'react';
import Fade from "react-reveal/Fade";

const SelectedMovie = ({ movieInfo, handleFloatButton }) => {
  const addDefault = (e) => {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  }

  let imdb = `https://www.imdb.com/title/${movieInfo.imdbID}`;

  let {
    Title, 
    Year, 
    Rated, 
    Released, 
    Runtime, 
    Genre,
    Poster, 
    Director,
    Writer,
    Actors,
    Awards,
    imdbRating,
    Production
  } = movieInfo;
  return (
    <section>
      <Fade>
        <div className="jumbotron">
          <div className="container">
            <div className="grid">
              <div className="grid__image">
              <img style={{ marginRight: 25}} src={Poster} alt={Title} onError={addDefault} />
            </div>
            <div className="grid__content">
              <h3 id= "text">{Title} ({Year})</h3>
              <p id="title"><b id="text">Released:</b> {Released}</p>
              <p id="title"><b id="text">Runtime:</b> {Runtime}</p>
              <p id="title"><b id="text">Genre:</b> {Genre}</p>
              <p id="title"><b id="text">Rated:</b> {Rated}</p>
              <p id="title"><b id="text">Actors:</b> {Actors}</p>
              <p id="title"><b id="text">Director:</b> {Director}</p>
              <p id="title"><b id="text">Writer:</b> {Writer}</p>
              <p id="title"><b id="text">Production:</b> {Production}</p>
              <p id="title"><b id="text">Awards:</b> {Awards}</p>
              <p id="title"><b id="text">IMDb Rating:</b> {imdbRating}</p>
              <p id="title"><b id="text">Full Details:</b> <a  id="title" href={imdb} target="_blank">IMDB</a></p>
            </div>
            </div>
          </div>
        </div>
      </Fade>
      <button onClick={handleFloatButton} className='btn-float'>
        <i className="fa fa-chevron-left"></i>
      </button>
    </section>
  );
}

export default SelectedMovie;