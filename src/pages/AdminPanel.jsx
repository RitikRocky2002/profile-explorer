import { CircleX, PencilIcon, PlusCircle, TrashIcon } from "lucide-react";
import { useContext, useState } from "react";
import AppContext from "./../context/AppContext";

const AdminPanel = () => {
  const { profiles, setProfiles } = useContext(AppContext);
  const [isOpen, setisOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newProfile, setNewProfile] = useState({
    id: "",
    name: "",
    photo: "",
    description: "",
    address: "",
    category: "",
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const [editProfile, setEditProfile] = useState(null); // Holds the profile to edit

  function onChangeHandler(e) {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setNewProfile({
        ...newProfile,
        coordinates: { ...newProfile.coordinates, [name]: parseFloat(value) },
      });
    } else if (editProfile) {
      setEditProfile({ ...editProfile, [name]: value });
    } else {
      setNewProfile({ ...newProfile, [name]: value });
    }
  }

  function createProfile() {
    if (newProfile.name && newProfile.photo && newProfile.category) {
      setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
      setNewProfile({
        id: "",
        name: "",
        photo: "",
        description: "",
        address: "",
        category: "",
        coordinates: { lat: 0, lng: 0 },
      });
      setisOpen(false);
    } else {
      alert("Please fill in all required fields.");
    }
  }

  function updateProfile() {
    if (editProfile) {
      const updatedProfiles = profiles.map((profile) =>
        profile.id === editProfile.id ? editProfile : profile
      );
      setProfiles(updatedProfiles);
      setEditModalOpen(false);
    }
  }

  function deleteProfile(id) {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      const newList = profiles.filter((profile) => profile.id !== id);
      setProfiles(newList);
    }
  }

  return (
    <div className="px-4 py-6 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Profile Management</h1>
        <button
          onClick={() => setisOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg
            hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <PlusCircle />
          Add Profile
        </button>
      </div>
      {isOpen && (
        <div className="mt-6 p-4 rounded-lg shadow-2xl border border-gray-700">
          {/* Input fields for adding a new profile */}
          {/* Same as before */}
        </div>
      )}

      {isEditModalOpen && editProfile && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="flex justify-evenly">
              <input
                onChange={onChangeHandler}
                value={editProfile.name}
                className="border p-4 w-[48%] rounded"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onChange={onChangeHandler}
                value={editProfile.photo}
                className="border p-4 w-[48%] rounded"
                type="text"
                name="photo"
                placeholder="Photo URL"
              />
            </div>
            <div className="flex justify-evenly mt-4">
              <input
                onChange={onChangeHandler}
                value={editProfile.address}
                className="border p-4 w-[48%] rounded"
                type="text"
                name="address"
                placeholder="Address"
              />
              <select
                onChange={onChangeHandler}
                value={editProfile.category}
                className="border p-4 w-[48%] rounded"
                name="category"
              >
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mt-4 mx-4">
              <input
                onChange={onChangeHandler}
                value={editProfile.description}
                className="border p-4 w-full rounded"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="flex justify-evenly mt-4">
              <button
                onClick={() => setEditModalOpen(false)}
                className="w-72 h-15 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 rounded-lg
                  hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center gap-2
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <CircleX />
                Cancel
              </button>
              <button
                onClick={updateProfile}
                className="w-72 h-15 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg
                  hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <PencilIcon />
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4 mt-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{profile.name}</h3>
                <p className="text-sm text-gray-500">{profile.category}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditProfile(profile);
                  setEditModalOpen(true);
                }}
                className="p-2 text-gray-600 hover:text-blue-600"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => deleteProfile(profile.id)}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
