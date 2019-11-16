import React, { Component } from "react";
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await Axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(e => (
              <Movie
                key={e.id}
                id={e.id}
                year={e.year}
                title={e.title}
                summary={e.summary}
                poster={e.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
