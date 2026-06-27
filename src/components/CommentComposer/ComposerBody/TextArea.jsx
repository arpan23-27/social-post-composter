export default function TextArea() {
  return (
    <div className="composer-textarea">
      <label htmlFor="comment" className="sr-only">
        What's happening?
      </label>
      <textarea
        id="comment"
        placeholder="What's happening?"
        rows="3"
      ></textarea>
    </div>
  );
}