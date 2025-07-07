import './CharacterCard.css';

export default function CharacterCard({ name, bio, variant, id, onCardClick }) {
    return (
        <div className={`character-card ${variant ?? ''}`} onClick={() => onCardClick({ name, bio, variant, id }) }>
            <h2>{ name }</h2>
            <p>{ bio }</p>            
        </div>
    )
}

