const COLORS = ["black", "red", "yellow", "blue"];

const ColorSelector = ({ setColor }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h2>Select the border color</h2>
      <select onChange={handleChange}>
        {COLORS.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </>
  );
};

export default ColorSelector;
