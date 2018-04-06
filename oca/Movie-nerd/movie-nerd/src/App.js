import React, { Component } from 'react';
import Title from './components/Title';
import Forms from './components/Forms';
import Movie from './components/Movie'
import Footer from './components/Footer';
import './App.css';

const API_KEY = 'a5f2c913';

class App extends Component {

  state = {
    Title: undefined,
    Type: undefined,
    imdbID: undefined,
    Year: undefined,
    Poster: undefined

  }

  getMovie = async (e) => {
    e.preventDefault();
    const movie = e.target.movie.value;

    const api_call = await fetch(`http://www.omdbapi.com/?s=${movie}&y=&r=json&plot=short&apikey=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      Title: data.Search[0].Title,
      Type: data.Search[0].Type,
      imdbID: data.Search[0].imdbID,
      Year: data.Search[0].Year,
      Poster: data.Search[0].Poster,
    })
  }

  render() {
    return (
      <div>
      <Title />
      <Forms getMovie={this.getMovie} />
      <Movie 
      Title={this.state.Title} 
      Type={this.state.Type} 
      imdbID={this.state.imdbID}
      Year={this.state.Year}
      Poster={this.state.Poster} />
      <Footer />
      </div>
    );
  }
};

export default App;
