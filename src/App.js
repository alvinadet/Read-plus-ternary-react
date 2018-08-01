import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    loading: false
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      this.setState({
        data: res.data,
        loading: true
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? ( //ternary,, state ? true : false
          this.state.data.map(key => {
            //state.namaobj.map(param => {})
            return <p>{key.name}</p>;
          })
        ) : (
          <h1>Loading ... </h1>
        )}
      </div>
    );
  }
}

export default App;
