import React from 'react'
import MovieListItem from './movieListItem';



const MovieList = ({ results, openPopup }) => {
	return (
		<section className="results">
			{results.map(result => (
				<MovieListItem key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default MovieList;