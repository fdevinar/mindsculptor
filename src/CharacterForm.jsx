import './CharacterForm.css';

export default function CharacterForm({ onAddCharacter }) {
    
    
    function handleClick() {
        const newChar = {name:"Valvenis", bio:"Mysterious elven lord", variant:"noble"};
        onAddCharacter(newChar); 
    }

    return (
        <>
            <div className="form-wrapper">
                <p>name</p>
                <p>bio</p>
                <p>variant</p>
                <button onClick={handleClick}>Add Character</button>
            </div>
        </>
    )   

}

