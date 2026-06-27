export default function TextArea({value, onChange}) {
  return (
    <div className="composer-textarea">
      <label htmlFor="comment" className="sr-only">
        What's happening?
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="What's happening?"
        rows="3"
      ></textarea>
    </div>
  );
}