import { Search } from "lucide-react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const SearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);
  const handleChange = (e) => setSearchTerm(e.target.value.toLowerCase());

  return (
    <div className="group w-72">
      <div className="relative group">
        <Search className="absolute top-2 left-2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
      </div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search profiles..."
        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
