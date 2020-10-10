import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class App extends React.Component{ 

  componentDidMount(){
    fetch('http://localhost:3000/families')
    .then(resp => resp.json())
    .then(data => console.log(data))
}

  render() {
  return (
    <div className="App">
      This will be my project 
    </div>
  );
}


}

export default connect(null, {fetchFamilies})(App);
