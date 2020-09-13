import React from 'react'

const SelectedMovie = ({ selected, closePopup }) => {

	if(selected) {
		let ratings = selected.Ratings.map(rating => <li key={rating.Source}><b id="yellow">{rating.Source}:</b> {rating.Value}</li>);
		let poster = selected.Poster === "N/A" ? "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png" : selected.Poster;
		let imdb = `https://www.imdb.com/title/${selected.imdbID}`;
		
		return (
			<section className="popup">
				<div className="selected-container">
					<div className="poster-frame">
						<img src={poster} alt="movie poster"/>
						<button className="close" onClick={closePopup}>Close</button>
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

	return (
		<div className="big-container">
			<div className="unselected-container">
				<h1 id="yellow">WELCOME TO QUICK MOVIE FACTS</h1>
				<h2>Simply search and select your movie to find information in seconds!</h2>
			</div>
		</div>
	)
}

export default SelectedMovie;



// if(selected) {
// 	let ratings = selected.Ratings.map(rating => <li key={rating.Source}><b id="yellow">{rating.Source}:</b> {rating.Value}</li>);
// 	let poster = selected.Poster === "N/A" ? "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png" : selected.Poster;
// 	let imdb = `https://www.imdb.com/title/${selected.imdbID}`;
		
// 	return (
// 		<section className="popup">
// 	  		<div className="content">
// 			  	<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
// 				<p className="rating">Rating: {selected.imdbRating}</p>
				
// 				<div className="plot">
// 					<img src={poster} />
// 				</div>

// 		  		<div className="movie-details">
			  			
// 		  			<div className="movie-details-header">
// 						<div className="header-1">
// 							<p>{selected.Plot}</p>
// 							<p><b id="yellow">Runtime:</b> {selected.Runtime}</p>
// 							<p><b id="yellow">Released:</b> {selected.Released}</p>
// 							<p><b id="yellow">Age Rating:</b> {selected.Rated}</p>
// 						</div>
// 		  			</div>

// 		  			<div className="movie-details-main">
// 		  				<p id="yellow"><b>Plot</b></p>
// 		  				<p id="genre"><i>{selected.Genre}</i></p>
// 						<p>{selected.Plot}</p>
						
// 						<p><b id="yellow">Starring:  </b>{selected.Actors}</p>
// 						<p><b id="yellow">Language:</b> {selected.Language}</p>
// 						<p><b id="yellow">Full Details:</b> <a href={imdb} target="_blank">IMDB</a></p>
// 		  			</div>
// 	  			</div>

// 				  <button className="close" onClick={closePopup}>Close</button>

// 	  		</div>
// 	  	</section>
// 	  	);
// 	}

//   	return (
//   		<div className="big-container">
//   			<div className="unselected-container">
//   				<h1 id="yellow">WELCOME TO QUICK MOVIE FACTS</h1>
//   				<h2>Simply search and select your movie to find information in seconds!</h2>
//   			</div>
//   		</div>
//   	)
// }