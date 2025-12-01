import React from "react";
import {useEffect, useState} from "react";
import Loading from "./Loading"
import Tours from "./Tours"

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try{
    // start loading the tours data
    setIsLoading(true)
    const rps = await fetch(url);
    console.log("rps",rps);
    const tours = await rps.json();
    console.log("tours",tours);
    // end of loading the tours data
    setTours(tours)
  }
    catch(error){
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchTours()
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id!==id);
    setTours(newTours);
    console.log("removetour",newTours);
  };

  if (isLoading){
    return (
    <main>< Loading /></main>)
  };

  if (tours.length === 0) {
    return(
      <main>
        <div className="title">
          <h2>No Places Left</h2>
          <button className="btn" onClick={fetchTours}
          style={{marginTop:'2rem'}}>Reload</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main> 
);
};
export default App;
