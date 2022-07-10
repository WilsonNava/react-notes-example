const COLORS = ["black", "red", "yellow", "blue"];

const ColorSelector = ({ setColor }) => {
  const handleChange = (e) => {
    console.log(e);

    setColor(e.target.value);
  };
  return (
    <select onChange={handleChange}>
      {COLORS.map((color) => (
        <option value={color}>{color}</option>
      ))}
    </select>
  );
};

export default ColorSelector;
