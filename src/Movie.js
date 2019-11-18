import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <article className="movie">
      <div className="movie__data">
        <div className="movie__info">
          <h2 className="movie__title">{title}</h2>
          <span className="movie__year">({year})</span>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div className="movie__poster">
          <img src={poster} alt={title} title={title} />
        </div>
      </div>
      <p className="movie__summary">{summary.slice(0, 200)}...</p>
    </article>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
