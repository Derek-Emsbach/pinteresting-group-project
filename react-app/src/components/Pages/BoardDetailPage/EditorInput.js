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
    <label htmlFor={id} className="board-form-labels">
      {label}
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
    </label>
  );
}
