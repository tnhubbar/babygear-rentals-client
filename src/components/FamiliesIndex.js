import React from 'react'
import FamilyShow from './FamilyShow'


const FamiliesIndex = (props) => {

return (
    <div>
        {props.families.map(family =>
           <div key={family.id}> <FamilyShow family={family}/> </div>
            )}
    </div>
)

}

export default FamiliesIndex 