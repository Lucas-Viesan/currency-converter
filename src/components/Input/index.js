import "./index.css";

export const Input = ({ value, onChange, type }) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className="input"
      type={type || "text"}
    />
  );
};
