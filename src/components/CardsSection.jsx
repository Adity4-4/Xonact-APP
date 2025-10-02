import ProfileCard from './ProfileCard'
import {Heart, Bookmark, MessageCircle } from 'lucide-react';

// Cards Section Component
const CardsSection = () => {

  const cardData = {
    mediaItems: [
      { type: "video", url: null },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400",
        alt: "Dance performance",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400",
        alt: "Stage show",
      },
    ],
    profile: {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      name: "Jerome Bell",
      description:
        "I'm a dancer and have achieved more than 30k follower organically.",
      rating: 4.3,
    },
    metrics: [
      { icon: Heart, value: "785", label: "" },
      { icon: Bookmark, value: "877", label: "" },
      { icon: MessageCircle, value: "185", label: "" },
    ],
  };

  return (
    <section className="bg-gray-50 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards will be inserted here */}
          {/* Example placeholder to show structure */}
            <ProfileCard {...cardData} />
        </div>
      </div>
    </section>
  );
};

export default CardsSection