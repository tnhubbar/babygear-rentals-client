import React from 'react'
import FamiliesIndex from '../components/FamiliesIndex.js'
import FamilyForm from '../components/FamilyForm.js'
import {connect} from 'react-redux'
import {fetchFamilies} from '../actions/fetchFamilies.js'


class FamiliesContainer extends React.Component{

         componentDidMount(){
   this.props.fetchFamilies()
}

    render(){
        return(
            <div>
                <FamilyForm/><br/>
                <FamiliesIndex families={this.props.families}/>
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