const COLORS = ["black", "red", "yellow", "blue"];

const ColorSelector = ({ setColor }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <b>Select the border color</b>
      <br />
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
