import React from 'react'

const DEFAULT_IMAGE = "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";

const MovieListItem = ({ result, openDetail }) => {

	let poster = result.Poster === "N/A" ? DEFAULT_IMAGE : result.Poster;

	return (
		<div className="result" onClick={() => openDetail(result.imdbID)}>
			<img src={poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default MovieListItem;
