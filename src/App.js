import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div id="background">
            <img alt="background" src="./img/decor.svg"/>
          </div>
      </div>
    );
  }
}

export default App;
