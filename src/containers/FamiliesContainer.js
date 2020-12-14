import React from 'react'
import FamiliesIndex from '../components/FamiliesIndex.js'
import FamilyForm from '../components/FamilyForm.js'
import FamilyShow from '../components/FamilyShow.js'
import {connect} from 'react-redux'
import {fetchFamilies} from '../actions/fetchFamilies.js'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar.js'
import About from '../components/About.js'
import Contact from '../components/Contact.js'


class FamiliesContainer extends React.Component{

         componentDidMount(){
   this.props.fetchFamilies()
}

    render(){
        return(
            <div>
                <Switch>
                <Route path='/families/new' component={FamilyForm} />
                <Route path='/families/contact' component={Contact} />
                <Route path='/families/:id'  render={(routerProps) => <FamilyShow {...routerProps} families={this.props.families}/> } />
                <Route exact path='/families' render={() => <FamiliesIndex families={this.props.families}/> } />
                <Route path='/' component={About} />
                </Switch>
            </div>
        )
    }
}

    const mapStateToProps = (state) => {
        return{
    families: state.families
    }
    }

export default connect(mapStateToProps, {fetchFamilies} )(FamiliesContainer)