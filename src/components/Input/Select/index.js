import "./index.css";

export const Select = ({ options, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)} // Chama onChange com o valor selecionado
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
