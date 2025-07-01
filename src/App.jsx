// import { useState } from 'react'
import mindLogo from './assets/logo.png'
import './App.css'
import CharacterCard from './CharacterCard'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-logo">
        <img src={ mindLogo } alt="Logo" />
        <h1>mindsculptor</h1>  
      </div>

      <div className="character-cards-wrapper">
        <CharacterCard name="Loreal" bio="Noble elf from high family" variant="noble"/>
        <CharacterCard name="Borgnar" bio="Tough dwarf from the mountains" variant="tough"/>
        <CharacterCard name="Wraight" bio="Dark and accursed shadow figure" variant="fiend"/>
      </div>



      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div> */}
      

    </>
  )
}

export default App
