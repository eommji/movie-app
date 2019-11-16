import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async() => {
    const movies = await Axios.get('https://yts-proxy.now.sh/list_movies.json');
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <div>{isLoading ? 'loading' : 'ready'}</div>
      </div>
    );
  }
}

export default App;