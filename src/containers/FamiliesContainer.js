import React from 'react'
import FamiliesIndex from '../components/FamiliesIndex.js'
import FamilyForm from '../components/FamilyForm.js'
import FamilyShow from '../components/FamilyShow.js'
import {connect} from 'react-redux'
import {fetchFamilies} from '../actions/fetchFamilies.js'
import {Route, Switch} from 'react-router-dom'


class FamiliesContainer extends React.Component{

         componentDidMount(){
   this.props.fetchFamilies()
}

    render(){
        return(
            <div>
                <FamiliesIndex families={this.props.families} />
                <Switch>
                <Route path='/families/new' component={FamilyForm} />
                <Route path='/families/:id'  render={(routerProps) => <FamilyShow {...routerProps} families={this.props.families}/> } />
                <Route path='/families' render={() => <FamiliesIndex families={this.props.families}/> } />
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