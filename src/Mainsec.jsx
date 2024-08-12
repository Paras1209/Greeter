import { useState } from "react";
import { useEffect } from 'react';
import './Mainsec.css'
export default function Mainsec() {

    let time = new Date().getHours();
    
    
  const[ctime, setCtime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      setTimeout(() => {
        setCtime(new Date().toLocaleTimeString());
      }, 1000);
    });
      
    let greeting = " ";
      
    if (time >= 0 && time < 12){
      greeting = "Good Morning";
    }else if(time >= 12 && time < 16){
      greeting="good afternon";
    }else if(time >= 16 && time < 20){
      greeting ="good evening";
    }else{
      greeting="Good Night";
    }
  
  return (
    <main className="container">
      <h3>Hello Sir, {greeting}</h3>
      <div>Todays Date : {new Date().toDateString()}</div>
      <div className="timediv">Current time : {ctime}</div>
      
    </main>
  );
}