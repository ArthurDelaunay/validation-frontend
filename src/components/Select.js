const Select = ({ label, handleChange, value, options }) => {
  return (
    <select onChange={handleChange} value={value}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        )
      })}
    </select>
  )
}

export default Select
