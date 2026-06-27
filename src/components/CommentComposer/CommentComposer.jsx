// src/components/CommentComposer/CommentComposer.jsx
import Avatar from "./ComposerBody/Avatar.jsx";
import TextArea from "./ComposerBody/TextArea.jsx";
import CharacterCounter from "./ComposerFooter/CharacterCounter";
import SubmitButton from "./ComposerFooter/SubmitButton";
import "./CommentComposer.css";

export default function CommentComposer(){
    return(
        <form 
            className="comment-composer"
            onSubmit={handleSubmit}>
            <div className="composer-body">
                <Avatar/>
                <TextArea/>
            </div>
            <div className="composer-footer">
                <CharacterCounter/>
                <SubmitButton/>
            </div>
        </form>
    )
}