import { ExternalLink, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <div className="group bg-white rounded-xl  shadow-lg shadow-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={profile.photo}
          alt={"profile"}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 "
        />
        <div className="absolute top-0 right-0 m-4 ">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
            ${
              profile.category === "developer"
                ? "bg-blue-100 text-blue-800"
                : profile.category === "designer"
                ? "bg-purple-100 text-purple-800"
                : profile.category === "manager"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {profile.category.charAt(0).toUpperCase() +
              profile.category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {profile.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {profile.description}
        </p>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm truncate">{profile.address}</span>
        </div>
        <button
          onClick={() => {
            navigate(`/profile/${profile.id}`);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg
            hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Details
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
