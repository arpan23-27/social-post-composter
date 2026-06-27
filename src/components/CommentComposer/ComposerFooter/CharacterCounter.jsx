export default function CharacterCounter({text, maxCharacters }){
    const  remainingCharacters  = maxCharacters - text.length;
    return (
        <span 
           className="character-counter">
            {remainingCharacters} characters remaining
        </span>
    )
}