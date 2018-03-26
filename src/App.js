import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokemon from './components/pokemonList/pokemonList';
import Favorites from './components/favoritePokemon/favoritePokemon';
import Navbar from './components/navbar/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Pokemon} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    );
  }
}

export default App;
