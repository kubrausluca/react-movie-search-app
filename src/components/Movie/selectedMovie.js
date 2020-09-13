import React from 'react'

const DEFAULT_IMAGE = "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";

const SelectedMovie = ({ selected, closeDetail }) => {

	
	let ratings = selected.Ratings.map(rating => <li key={rating.Source}><b id="yellow">{rating.Source}:</b> {rating.Value}</li>);
	let poster = selected.Poster === "N/A" ? DEFAULT_IMAGE : selected.Poster;
	let imdb = `https://www.imdb.com/title/${selected.imdbID}`;
	
	return (
		<section className="detail">
			<div className="selected-container">
				<div className="poster-frame">
					<img style={{ marginBottom: 50}} src={poster} alt="movie poster"/>
					<button className="close" onClick={closeDetail}>Close</button>
				</div>
				<div className="movie-details">
					<h2>{selected.Title} ({selected.Year})</h2>
						
					<div className="movie-details-header">
					<div className="header-1">
						<p><b id="yellow">Runtime:</b> {selected.Runtime}</p>
						<p><b id="yellow">Released:</b> {selected.Released}</p>
						<p><b id="yellow">Age Rating:</b> {selected.Rated}</p>
					</div>
					<div className="ratings">
						<ul>{ratings}</ul>
					</div>
					</div>

					<div className="movie-details-main">
						<p><b id="yellow">Plot:  </b>{selected.Genre}</p>
				
						<p><b id="yellow">Starring:  </b>{selected.Actors}</p>
						<p><b id="yellow">Language:</b> {selected.Language}</p>
						<p><b id="yellow">Box Office:</b> {selected.BoxOffice}</p>
						<p><b id="yellow">Production:</b> {selected.Production}</p>
						<p><b id="yellow">Full Details:</b> <a href={imdb} target="_blank">IMDB</a></p>
		
					</div>
				</div>
				
			</div>
			
		</section>
	);
	
}

export default SelectedMovie;