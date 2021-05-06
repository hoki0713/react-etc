import "./Input.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementtype) {
    case "input":
      inputElement = <input value={props.value} onChange={props.changed} />;
      break;
    case "select":
      inputElement = (
        <select className="select" value={props.value} onChange={props.changed}>
          {Object.keys(props.options).map((option) => (
            <option key={option} value={props.options[option].value}>
              {props.options[option].text}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input value={props.value} onChange={props.changed} />;
  }
  return (
    <div className="Input">
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
