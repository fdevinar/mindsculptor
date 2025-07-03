import { useState } from 'react'
import './CharacterForm.css';

export default function CharacterForm({ onAddCharacter, onClose }) {
    
    const [charName, setCharName] = useState("");
    const [charBio, setCharBio] = useState("");
    const [charVariant, setCharVariant] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        const newChar = {name:charName, bio:charBio, variant:charVariant};
        onAddCharacter(newChar); 
        
        setCharName("");
        setCharBio("");
        setCharVariant("");
    }
    
    return (        
        <div className="form-wrapper">
            <button onClick={onClose}>X</button>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="name">Name:</label>
                    <input type="text" required value={charName} onChange={(e) => setCharName(e.target.value)} />    
                </div>
                
                <div className="form-item">
                    <label htmlFor="name">Bio:</label>
                    <input type="text" required value={charBio} onChange={(e) => setCharBio(e.target.value)} />    
                </div>

                <div className="form-item">
                    <label htmlFor="name">Variant:</label>
                    <select name="variant" required value={charVariant} onChange={(e) => setCharVariant(e.target.value)} >
                        <option value="" disabled hidden>Select a variant</option>                    
                        <option value="harmonist">Harmonist</option>
                        <option value="tidekeeper">Tidekeeper</option>
                        <option value="pactbound">Pactbound</option>
                        <option value="riftspawn">Riftspawn</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>

                

                <input type="submit" value="Create Character" />            
            </form>               
        </div>        
    )   

}

