const Input = ({ label, handleChange, value, placeholder, type }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
