import { useState, useEffect } from 'react'

export default function Toast({ message, type, trigger }) {

  const [isVisible, setIsVisible] = useState(false);
  const [isProgressActive, setProgressActive] = useState(null);

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);

      // slight delay before starting animation
      const anim = setTimeout(() => setProgressActive("active"), 10);

      // auto-dismiss after duration
      const hide = setTimeout(() => {
        setIsVisible(false);
        setProgressActive(null);
      }, 1800);

      return () => {
        clearTimeout(anim);
        clearTimeout(hide);
      };
    }
  }, [trigger]);
  
return (
  <div className={`toast ${type} ${isVisible ? 'visible' : ''}`}>
    <h3>{message}</h3>
    <div className="progress-bar-wrapper">
      <div className={`filler ${isProgressActive}`}></div>
    </div>
  </div>
);

}