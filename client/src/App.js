import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://10.0.0.99:3001/api/quotes').then(resp => resp.json()).then(data => {
      debugger;
    })
  }


  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
