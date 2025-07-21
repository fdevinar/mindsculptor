import { useState, useEffect } from 'react'

export default function Toast({ message, type }) {

  const [isProgressActive, setProgressActive] = useState(null);
  
  useEffect(() => {
    if (message) {
      setProgressActive('active');
      setTimeout(function() { 
        setProgressActive(null);              
       }, 
      2600);
    }
  },[message]);
  
  return (
    <div className={`toast ${type}`}>
      <h3>{message}</h3>      
      <div className="progress-bar-wrapper" >
        <div className={`filler ${isProgressActive}`}></div>        
      </div>
    </div>
  );
}