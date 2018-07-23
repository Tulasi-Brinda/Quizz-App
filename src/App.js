import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import { Provider } from "react-redux";
import store from './store';
import Header from './components/Header';
import Questions from './containers/Questions';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
     <div className="App">
      <Header />
      <Questions />
      </div>  
      </Provider>  
    );
  }
}

export default App;
