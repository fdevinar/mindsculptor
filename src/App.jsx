import { useState } from 'react'
import mindLogo from './assets/logo.png'
import './App.css'
import CharacterCard from './CharacterCard'
import CharacterForm from './CharacterForm'

function App() {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [characterList, setCharacterList] = useState ([
    {name:"Loreal", bio:"Noble elf from high family", variant:"harmonist"},
    {name:"Borgnar", bio:"Tough dwarf from the mountains", variant:"tidekeeper"},
    {name:"Wraight", bio:"Dark and accursed shadow figure", variant:"riftspawn"},
  ]
  )

  function addCharacter(newChar) {
    setCharacterList(prev=> [...prev, newChar]);
    setFormVisibility(false);
  }

  function closeForm() {
    setFormVisibility(false);
  }

  return (
    <>
      <div className="main-logo">
        <img src={ mindLogo } alt="Logo" />
        <h1>mindsculptor</h1>  
      </div>

      <button onClick={() => setFormVisibility(!isFormVisible)}>Display character creation form</button>
      {isFormVisible && (
        <CharacterForm onAddCharacter={addCharacter} onClose={closeForm}/>
      )}
      
      <div className="character-cards-wrapper">
        
        {characterList.map((char, index) => (
          <CharacterCard key={index} name={char.name} bio={char.bio} variant={char.variant} />
        )
        )}
      </div>
      

    </>
  )
}

export default App
