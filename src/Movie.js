import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="movie__data">
        <h4 className="movie__title">{title}</h4>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => (
            <li key={idx} className="genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 130)}...</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
