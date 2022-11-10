const Dropdown = ({
  label,
  items,
  value,
  valueProperty,
  displayProperty,
  handleOnChange,
  width,
  style,
}) => {
  return (
    <>
      <label
        className="dropdown-label">
          {label}
      </label>

      <select
        className="custom-select"
        style={{width, ...style}}
        value={value}
        onChange={handleOnChange}
      >
        {items.map((item, key) =>
          <option
            key={key}
            value={item[valueProperty]}
          >
            {item[displayProperty]}
          </option>
        )}
      </select>
    </>
  )
}

export default Dropdown
