export default function CharacterCounter({
    text, maxCharacters 
}){
   
 const  remainingCharacters  = maxCharacters - text.length;
   
 let className = "character-counter";
 let message = `${remainingCharacters} characters remaining` ;
 

 if(remainingCharacters <= 20 && remainingCharacters >= 0){
    className +=" warning";
 }

 if (remainingCharacters < 0){
    className += " error";
    message = `${Math.abs(
        remainingCharacters
    )} characters over limit`;
 }
return (
    <span className={className}>
      {message}
    </span>
  );
}