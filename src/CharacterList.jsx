import { useState } from 'react'
import CharacterCard from './CharacterCard'
import './CharacterList.css'

export default function CharacterList({ characters, onCardClick }) {

    const [variantFilter, setVariantFilter] = useState('');        
    const filteredCharacters = variantFilter ? characters.filter(char => char.variant === variantFilter) : characters;

    return (
        <>
        <div className="filter-bar">
            <select name="variant" id="variant" onChange={(e) => setVariantFilter(e.target.value)}>                      
                <option value="">All variants</option>
                <option value="harmonist">Harmonist</option>
                <option value="tidekeeper">Tidekeeper</option>
                <option value="pactbound">Pactbound</option>
                <option value="riftspawn">Riftspawn</option>
                <option value="unknown">Unknown</option>
            </select>            
        </div>
        <div className="characters-wrapper">                        
            {filteredCharacters.map((char) => (
                <CharacterCard
                key={char.id}
                name={char.name}
                bio={char.bio}
                variant={char.variant}
                id={char.id}
                onCardClick={() => onCardClick(char)}
            />
            )
        )}
        </div>
        </>
    )

}
