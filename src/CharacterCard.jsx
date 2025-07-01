import './CharacterCard.css';

export default function CharacterCard({ name, bio, variant }) {
    return (
        <div className={`character-card ${variant ?? ''}`}>
            <h2>{ name }</h2>
            <p>{ bio }</p>
        </div>
    )
}

