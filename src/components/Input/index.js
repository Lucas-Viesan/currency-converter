import "./index.css";

export const Input = ({ value = "", onChange }) => {
  return (
    <input
      onChange={(e) => {
        const newValue = e.target.value;
        if (onChange) onChange(newValue); // Só chama onChange se estiver definido
      }}
      value={value}
      className="input"
      type="number"
    />
  );
};
