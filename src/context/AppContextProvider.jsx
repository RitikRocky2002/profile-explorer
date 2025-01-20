import { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { profiles as initialProfiles } from "../data/profile";

export const AppContextProvider = ({ children }) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [profiles, setProfiles] = useState(initialProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(initialProfiles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const filtered = profiles.filter(
      (profile) =>
        (selectedCategory === "all" || profile.category === selectedCategory) &&
        (profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          profile.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProfiles(filtered);
  }, [profiles, searchTerm, selectedCategory]);

  return (
    <AppContext.Provider
      value={{
        showAdmin,
        setShowAdmin,
        profiles,
        setProfiles,
        filteredProfiles,
        setFilteredProfiles,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
