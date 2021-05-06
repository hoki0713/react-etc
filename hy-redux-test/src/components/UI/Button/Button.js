import "./Button.css";

const Button = ({ props, children }) => {
  return (
    <div className="Button">
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
