import React from 'react'
import Tour from './tour'
const Tours = ({toursList}) => {
    const tours = toursList.map((i)=><Tour tours={i}/>)//forgot and wrote it ()=><Tour tours={toursList}/>
    return (
        <div>
            {tours}
        </div>
    )
}

export default Tours
