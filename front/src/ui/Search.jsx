import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Search() {
  let navigate = useNavigate();
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
    navigate(`/search`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between" 
    >
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search..."
        className=" bg-white p-2 rounded-xl w-80"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2">
        🚀
      </button>

    </form>
  )
}

export default Search