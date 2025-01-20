import { useContext, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import AppContext from "../context/AppContext";

const ProfileList = () => {
  const {
    searchTerm,
    selectedCategory,
    profiles,
    filteredProfiles,
    setFilteredProfiles,
  } = useContext(AppContext);

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
  }, [profiles, selectedCategory, searchTerm, setFilteredProfiles]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
