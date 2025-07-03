import CharacterCard from './CharacterCard'
import './CharacterList.css'

export default function CharacterList({ characters }) {

    return (
        <div className="character-cards-wrapper">
            {characters.map((char) => (
                <CharacterCard key={char.id} name={char.name} bio={char.bio} variant={char.variant} />
            )
            )}
        </div>
    )

}
