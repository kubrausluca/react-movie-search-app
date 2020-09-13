import React from 'react'
import MovieListItem from './movieListItem';



const MovieList = ({ results, openDetail }) => {
	return (
		<section className="results">
			{results.map(result => (
				<MovieListItem key={result.imdbID} result={result} openDetail={openDetail} />
			))}
		</section>
	)
}

export default MovieList;