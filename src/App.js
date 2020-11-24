import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchFamilies} from './actions/fetchFamilies.js'
import FamiliesContainer from './containers/FamiliesContainer'
import NavBar from '../src/components/NavBar.js'


class App extends React.Component{ 

  //componentDidMount(){
   //this.props.fetchFamilies()
//}

  render() {
  return (
    <div className="App">
      <h1>Baby Gear Rentals!</h1>
      <NavBar />
      <FamiliesContainer/>
    </div>
  );
}


}

export default connect()(App);
