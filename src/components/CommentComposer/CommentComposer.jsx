// src/components/CommentComposer/CommentComposer.jsx
import { useState } from "react";
import Avatar from "./ComposerBody/Avatar.jsx";
import TextArea from "./ComposerBody/TextArea.jsx";
import CharacterCounter from "./ComposerFooter/CharacterCounter";
import SubmitButton from "./ComposerFooter/SubmitButton";


import "./CommentComposer.css";


const MAX_CHARACTERS = 280;


export default function CommentComposer(){
    const [text,  setText] = useState("");

    function  handleTextChange(event){
        setText(event.target.value);
    }



    function handleSubmit(){
        event.preventDefault();

        if(isSubmitDisabled)return;
        console.log("Submitted", text);

        setText("");
    }
    const isSubmitDisabled = 
    text.trim() === "" || 
    text.length > MAX_CHARACTERS;
   
    return(
        <form 
            className="comment-composer"
            onSubmit={handleSubmit} >
            <div className="composer-body">
                <Avatar/>
                
            <TextArea 
              value={text}  
              onChange={handleTextChange}
            />
            </div>

            <div className="composer-footer">
                <CharacterCounter 
                 text={text}
                 maxCharacters = {MAX_CHARACTERS}
            />
            <SubmitButton 
              disabled={isSubmitDisabled}
            />
            </div>
        </form>
    )
}