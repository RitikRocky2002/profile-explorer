import { Layout, MapIcon, MapPin, Settings, Users } from "lucide-react";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { showAdmin, setShowAdmin } = useContext(AppContext);

  const navigate = useNavigate();

  const handleAdminToggle = () => {
    if (showAdmin) {
      navigate("/");
    } else {
      navigate("/admin");
    }
    setShowAdmin(!showAdmin);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* Logo and Title */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <MapPin className="w-8 h-8 text-blue-600" />
          <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Profile Explorer
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-x-4">
          <SearchBar />
          <div className="flex items-center gap-x-4">

            {/* Admin Toggle Button */}
            <button
              onClick={handleAdminToggle}
              className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
              title={showAdmin ? "View Profiles" : "Manage Profiles"}
            >
              {showAdmin ? (
                <Users className="w-6 h-6" />
              ) : (
                <Settings className="w-6 h-6" /> 
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
