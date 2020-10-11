import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchFamilies} from './actions/fetchFamilies.js'
import FamiliesContainer from './containers/FamiliesContainer'

class App extends React.Component{ 

  //componentDidMount(){
   //this.props.fetchFamilies()
//}

  render() {
  return (
    <div className="App">
      Baby Gear Rentals!
      <FamiliesContainer/>
    </div>
  );
}


}

export default connect()(App);
