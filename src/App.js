import React, { Component } from "react";
import Axios from "axios";
import Movie from "./Movie";

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
      <div>
        {isLoading
          ? "loading..."
          : movies.map(e => (
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
    );
  }
}

export default App;
