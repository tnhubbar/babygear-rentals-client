import React from 'react'


const FamiliesIndex = (props) => {

return (
    <div>
        {props.families.map(family =>
           <li key={family.id}> {family.name}</li>
            )}
    </div>
)

}

export default FamiliesIndex 