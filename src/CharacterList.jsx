import { useState } from 'react'
import CharacterCard from './CharacterCard'
import './CharacterList.css'

export default function CharacterList({ characters }) {

    const [variantFilter, setVariantFilter] = useState('all');
    // const filteredCharacters = characters.filter(char => char.variant = variantFilter);
    // console.log(filteredCharacters);

    return (
        <>
        <div className="filter-bar">
            <select name="variant" id="variant" onChange={(e) => setVariantFilter(e.target.value)}>                      
                <option value="all">All variants</option>
                <option value="harmonist">Harmonist</option>
                <option value="tidekeeper">Tidekeeper</option>
                <option value="pactbound">Pactbound</option>
                <option value="riftspawn">Riftspawn</option>
                <option value="unknown">Unknown</option>
            </select>
            <p>{ variantFilter }</p>
        </div>
        <div className="characters-wrapper">                        
            {characters.map((char) => (
                <CharacterCard key={char.id} name={char.name} bio={char.bio} variant={char.variant} />
            )
        )}
        </div>
        </>
    )

}
