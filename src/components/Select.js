const Select = ({ handleChange, value, options, error }) => {
  console.log(!error)
  return (
    <>
      <select
        onChange={handleChange}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
      {error && (
        <p className="capitalize text-sm mt-1 text-red-600 font-semibold text-end">
          {error.msg}
        </p>
      )}
    </>
  )
}

export default Select
