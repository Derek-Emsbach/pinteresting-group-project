import "./EditorInput.css";

export default function EditorInput({
  name,
  label = name,
  id = `editor_input-${name}`,
  type = "text",
  value,
  setValue,
  ...rest
}) {
  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="EditorInput">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={changeHandler}
          {...rest}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={changeHandler}
          {...rest}
        />
      )}
    </div>
  );
}
