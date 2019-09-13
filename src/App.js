import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Movie from './Movie';
import './App.scss';

class App extends React.Component {
  state = {
    onLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({
      movies,
      onLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  renderMovie(movie) {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        year={movie.year}
        summary={movie.summary}
        poster={movie.medium_cover_image || movie.small_cover_image}
        genres={movie.genres}
      />
    );
  }

  render() {
    let { movies, onLoading } = this.state;
    return (
      <section className="container">
        {onLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">{movies.map(this.renderMovie)}</div>
        )}
      </section>
    );
  }
}

export default App;
