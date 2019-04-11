import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    quotes: [],
    newQuote: {
      quote: "",
      author: ""
    }
  }

  componentDidMount() {
    fetch('http://10.0.0.99:3001/api/quotes').then(resp => resp.json()).then(({quotes}) => {
      this.setState({quotes})
    })
  }

  renderQuotes = (quotes) => {
    return quotes.map(({quote, id}) => {
      return <li key={id}>{quote}</li>
    })
  }

  handleOnChange = e => {
    e.preventDefault()
    this.setState({
      newQuote: {
        [e.target.name]: e.target.value
      }
    })
  }

  handleOnSubmit = e => {
    fetch('http://10.0.0.99:3001/api/quotes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.newQuote)
    })
    .then(resp => resp.json())
    .then(data => {
      debugger;
    })
  }


  render() {
    return (
      <div className="App">
        {this.renderQuotes(this.state.quotes)}
        <form>
          <input type="text" name="quote" value={this.state.newQuote.quote} onChange={this.handleOnChange} />
          <input type="text" name="author" value={this.state.newQuote.author} onChange={this.handleOnChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
