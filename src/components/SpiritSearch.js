export default function SpiritSearch({ searchValue, setSearchValue }) {

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  return (
    <input type='text' placeholder='Search by name' value={searchValue} onChange={handleChange}></input>
  )
}
