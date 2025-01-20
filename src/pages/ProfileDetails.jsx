const ProfileDetails = () => {
  return (
    <div className="mt-6 min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center">Profile Details</h1>
      <div className="flex flex-col items-center mt-6">
        <div className="h-48 w-48 rounded-full overflow-hidden">
          <img src={profile.photo} className="h-full w-full object-cover" />
        </div>
        <div className="mt-4 flex flex-col items-center w-2/5">
          <h1 className="font-semibold text-3xl">{profile.name}</h1>
          <p className="mt-4">{profile.description}</p>
        </div>

        <div className=" mt-6 w-24 rounded text-gray-600 bg-slate-300 text-center capitalize">
          {profile.category}
        </div>

        <button
          className="w-96 mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg
            hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Summary
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
