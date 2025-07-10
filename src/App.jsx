import { useState } from 'react'
import mindLogo from './assets/logo.png'
import './App.css'
import CharacterForm from './CharacterForm'
import { dummyCharacters } from './dummyData';
import CharacterList from './CharacterList';

function App() {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [characterToEdit, setCharacterToEdit] = useState(null);
  const [characters, setCharacters] = useState (dummyCharacters);

  function addCharacter(newChar) {
    setCharacters(prev=> [...prev, newChar]);
    setFormVisibility(false);
  }
  function closeForm() {
    setFormVisibility(false);
  }
  function handleCardClick(char) {
    setFormVisibility(!isFormVisible);
    setEditing(true);  
    setCharacterToEdit(char);
  }
  function editCharacter(editChar) {
    const updatedCharacters = characters.map(char =>
      char.id === editChar.id ?
      { ...char, name: editChar.name, bio: editChar.bio, variant: editChar.variant }
      : char
    )
    setCharacters(updatedCharacters);
    setFormVisibility(false);
  }
  function deleteChar(deleteChar) {
    const deletedCharacters = characters.filter(char => char.id !== deleteChar.id);
    setCharacters(deletedCharacters);    
  }

  return (
    <>
      <div className="main-logo">
        <img src={ mindLogo } alt="Logo" />
        <h1>mindsculptor</h1>  
      </div>

      <button onClick={() => setFormVisibility(!isFormVisible)}>Display character creation form</button>
      {isFormVisible && (
        <CharacterForm 
        onClose={closeForm}
        onDelete={deleteChar}
        {...isEditing ? 
          {
            onEditCharacter: editCharacter,
            characterToEdit: characterToEdit
          }
          :
          {
            onAddCharacter: addCharacter,
          }
        } 
        />
      )}
      
      <CharacterList characters={characters} onCardClick={handleCardClick} />

    </>
  )
}

export default App
