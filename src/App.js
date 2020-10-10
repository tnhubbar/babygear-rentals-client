import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{ 

  componentDidMount(){
    fetch('http://localhost:3000/rental_items')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
  return (
    <div className="App">
      This will be my project 
    </div>
  );
}}

export default App;
