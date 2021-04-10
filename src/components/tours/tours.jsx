import React from 'react'
import Tour from './tour'
const Tours = ({toursList,remove,refr}) => {
    const tours = toursList.map((i)=><Tour tours={i} remove={remove}/>)//forgot and wrote it ()=><Tour tours={toursList}/>
    return (
        <div>
            {!toursList.length?<button className="refresh" onClick={()=>refr()}>Refresh</button>:tours /*why it doesnt view ? its because you must use tourse.length and you were trying to use tours or one of the property of the array tourse */ }
            
        </div>
    )
}

export default Tours
