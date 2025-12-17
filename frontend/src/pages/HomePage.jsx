import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import axios from "axios";


const homepage = () => {
   const [isRateLimited,setIsRateLimited]= useState(true);
   const [notes,setnotes]= useState([])
   const[loading,setloading]=useState(true)
    useEffect(()=>{ 
        const fetchNotes= async()=>{
            try{
                const res= await axios.post("http://localhost:5001/api/notes");
                
                console.log(res.data);   
    
            } catch(error){
               
                 console.log("error fetching notes");
            }
            
        };
        fetchNotes();
    },[]);
   
    return (
      <div className="min-h-screen">
        <Navbar />
        {isRateLimited &&<RateLimitedUi />}
      </div>
    )
  };
  
  export default homepage;