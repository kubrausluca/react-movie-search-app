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
    Plot,
    Awards,
    imdbRating,
    BoxOffice,
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
              {/* <p className='grid__overview'><b>Overiew:</b> {Plot}</p> */}
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




// import React from 'react'

// const DEFAULT_IMAGE = "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";

// const SelectedMovie = ({ selected, closeDetail }) => {

	
// 	let ratings = selected.Ratings.map(rating => <li key={rating.Source}><b id="yellow">{rating.Source}:</b> {rating.Value}</li>);
// 	let poster = selected.Poster === "N/A" ? DEFAULT_IMAGE : selected.Poster;
// 	let imdb = `https://www.imdb.com/title/${selected.imdbID}`;
	
// 	return (
// 		<section className="detail">
// 			<div className="selected-container">
// 				<div className="poster-frame">
// 					<img style={{ marginBottom: 50}} src={poster} alt="movie poster"/>
// 					<button className="close" onClick={closeDetail}>Close</button>
// 				</div>
// 				<div className="movie-details">
// 					<h2>{selected.Title} ({selected.Year})</h2>
						
// 					<div className="movie-details-header">
// 					<div className="header-1">
// 						<p><b id="yellow">Runtime:</b> {selected.Runtime}</p>
// 						<p><b id="yellow">Released:</b> {selected.Released}</p>
// 						<p><b id="yellow">Age Rating:</b> {selected.Rated}</p>
// 					</div>
// 					<div className="ratings">
// 						<ul>{ratings}</ul>
// 					</div>
// 					</div>

// 					<div className="movie-details-main">
// 						<p><b id="yellow">Plot:  </b>{selected.Genre}</p>
				
// 						<p><b id="yellow">Starring:  </b>{selected.Actors}</p>
// 						<p><b id="yellow">Language:</b> {selected.Language}</p>
// 						<p><b id="yellow">Box Office:</b> {selected.BoxOffice}</p>
// 						<p><b id="yellow">Production:</b> {selected.Production}</p>
// 						<p><b id="yellow">Full Details:</b> <a href={imdb} target="_blank">IMDB</a></p>
		
// 					</div>
// 				</div>
				
// 			</div>
			
// 		</section>
// 	);
	
// }

// export default SelectedMovie;