import { useState } from 'react'
import mindLogo from './assets/logo.png'
import './App.css'
import CharacterForm from './CharacterForm'
import { dummyCharacters } from './dummyData';
import CharacterList from './CharacterList';

function App() {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [characters, setCharacters] = useState (dummyCharacters);

  function addCharacter(newChar) {
    setCharacters(prev=> [...prev, newChar]);
    setFormVisibility(false);
  }

  function closeForm() {
    setFormVisibility(false);
  }

  function handleCardClick(char) {
    alert('handle it baby');
    alert(char.name);
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
      
      <CharacterList characters={characters} onCardClick={handleCardClick} />

    </>
  )
}

export default App
