import React from 'react'
import {useState} from 'react'
const Tour = ({tours,remove}) => {
    const [viewtext,setViewText] = useState(false)
    let view =""
    if(!viewtext){
         view = "Read more..."
    }else{
        view = "hide"
    }
    return (
        <div key={tours.id} className="tour">
            
            <img  src={tours.image} alt={tours.name}/>

            <div  className="top">
            <h3 >{tours.name}</h3>
            <p >{tours.price}</p>
            </div>

            <p >  { viewtext ?  tours.info : tours.info.substring(0,200) } <button className="readMore" onClick={()=>setViewText(!viewtext)}>{view}</button> </p>{/*remmember how you have made the read more */}
            <button  className='remove' onClick={()=>remove(tours.id)} >Remove this choice</button>{/*ehile working forgot to use ()=> with on click end up triggering the function untile it empted the array */}
            
        </div>
    )
}

export default Tour
