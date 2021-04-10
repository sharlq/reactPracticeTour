import {useState,useEffect} from 'react'
import Header from "./components/header"
import Tours from "./components/tours/tours"
function App() {
  const [toursList,setToursList] = useState([])
  
  const url = 'https://course-api.com/react-tours-project'
  const fetchTours = async()=>{
    try{
      const response = await fetch(url)
      const list =await response.json()
      setToursList(list)
    }catch(error){

    }
  }// shit i didnt knew how to do this
  useEffect(()=>fetchTours(),[]);// shit wrote this wrong
 /*useEffect((
   setViewText()
   ),[]);*/   // too many re-renders + how to sit it regardless it is not the right way
  
  
   const removeChoice = (ID)=>{
   setToursList((i)=>i.filter((j)=>j.id!==ID))//it means if they are equal return false

   /* const newTour = toursList.filter((j)=>{
      if(j.id===ID){
        return false
      }else{
        return j
      }
    })
    setToursList(newTour)*/  // another way to do it 
  }

  const refresh = async()=> {
    await fetchTours()
  }


  console.log(toursList)
  return (
    <div className='main'>
      <Header />
      {/* <p>{toursList}</p> */}
      <Tours toursList={toursList} remove={removeChoice} refr={refresh}/>
    </div>
  );
}

export default App;
