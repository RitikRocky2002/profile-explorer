import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
