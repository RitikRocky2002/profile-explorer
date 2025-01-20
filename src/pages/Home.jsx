import { useContext } from "react";
import AppContext from "../context/AppContext";
import ProfileList from "../components/ProfileList";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const { showMap, profiles, setProfiles } = useContext(AppContext);
  return (
    <div>
      <CategoryFilter />
      <ProfileList />
    </div>
  );
};

export default Home;
