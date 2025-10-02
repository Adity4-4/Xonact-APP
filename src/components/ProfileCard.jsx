import MediaSlider from "./CardMediaSlider";
import ProfileInfo from "./CardProfileInfo";
import MetricsSection from "./CardMetricsSection";

// Main Card Component
const ProfileCard = ({ mediaItems, profile, metrics }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
      <MediaSlider items={mediaItems} />
      <ProfileInfo {...profile} />
      <MetricsSection metrics={metrics} />
    </div>
  );
};

export default ProfileCard