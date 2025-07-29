import { useState } from 'react'
import mindLogo from './assets/logo.png'
import './App.css'
import CharacterForm from './CharacterForm'
import { dummyCharacters } from './dummyData';
import CharacterList from './CharacterList';
import Toast from './Toast';

function App() {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [characterToEdit, setCharacterToEdit] = useState(null);
  const [characters, setCharacters] = useState (dummyCharacters);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTrigger, setToastTrigger] = useState(null);
  const [toastType, setToastType] = useState(null);  

  function addCharacter(newChar) {
    setCharacters(prev=> [...prev, newChar]);
    setFormVisibility(false);    
    setToastTrigger(Date.now());
    setToastMessage("Character created");
    setToastType('create');
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
    setToastMessage("Character edited");
    setToastType("edit");
    setToastTrigger(Date.now());    
  }
  function deleteChar(deleteChar) {
    const deletedCharacters = characters.filter(char => char.id !== deleteChar.id);
    setCharacters(deletedCharacters);     
    setFormVisibility(false);        
    setToastTrigger(Date.now());
    setToastMessage("Character deleted");
    setToastType('delete');
  }

  return (
    <>
      <div className="main-logo">
        <img src={ mindLogo } alt="Logo" />
        <h1>mindsculptor</h1>  
      </div>

            
      <Toast
        message={toastMessage}
        type={toastType}
        trigger={toastTrigger}
      />
      
      <button onClick={() => {
        setFormVisibility(!isFormVisible);
        setEditing(false);
      }}>Create new character
      </button>

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
