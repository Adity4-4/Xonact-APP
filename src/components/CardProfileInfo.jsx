import Rating from "./Rating";

// Profile Info Component
const ProfileInfo = ({ avatar, name, description, rating }) => {
  return (
    <div className="px-6 py-4">
      <div className="flex items-start gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">{description}</p>
          <Rating value={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo