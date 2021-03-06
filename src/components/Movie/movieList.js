import React from 'react';
import MovieListItem from './MovieListItem';
import Pagination from "react-js-pagination";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { faSortUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieList = ({handleShowMovie, movies, handleSearch, activePage, searchTerm}) => {
  
    var ShowList = movies[0].response;
    var MovieListItems = ShowList === 'True' && movies[0].search.map((m, idx) => (
      <MovieListItem
        key={m.imdbID + idx}
        title={m.Title}
        year={m.Year}
        poster={m.Poster}
        showMovie={handleShowMovie.bind(this, m.Title, m.Year)}
      />
    ))

    function handlePageChange(pageNumber) {
      handleSearch(searchTerm, pageNumber);
    }

    return (
      <section>
        {ShowList === "True" ? (
          <div>
            <div className="container">
              <div className="card">
                <div className="card__group">{MovieListItems}</div>
              </div>
              <Pagination
                hideDisabled
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={movies[0].totalResults}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </div>
            <AnchorLink href="#pageTop" className="btn-float">
              <FontAwesomeIcon 
                style={{width: "100%" , textAlign: "center", color: '#fff', fontSize: '1.25rem', lineHeight: '55px', justifyContent: "center", marginTop: 15}}
                icon={faSortUp} 
              />
            </AnchorLink>
          </div>
        ) : (
          <div className="container">
            <h1 className="flex placeholder">Oops, not found :(</h1>
          </div>
        )}
      </section>
    );
}

export default MovieList;