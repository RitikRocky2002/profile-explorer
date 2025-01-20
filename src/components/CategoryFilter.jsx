import React, { useContext } from "react";
import { Code, Palette, UserCog, Users } from "lucide-react";
import AppContext from "../context/AppContext";

const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const categories = [
    { id: "all", label: "All", icon: <Users className="w-4 h-4" /> },
    {
      id: "developer",
      label: "Developers",
      icon: <Code className="w-4 h-4" />,
    },
    {
      id: "designer",
      label: "Designers",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      id: "manager",
      label: "Managers",
      icon: <UserCog className="w-4 h-4" />,
    },
    { id: "others", label: "Others", icon: <Users className="w-4 h-4" /> },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => setSelectedCategory(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            transform hover:scale-105
            ${
              selectedCategory === id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 shadow-sm"
            }`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
