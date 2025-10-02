import { useState } from "react";
import { ChevronLeft, ChevronRight, Play} from 'lucide-react';
// Media Slider Component
const MediaSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-t-2xl overflow-hidden group">
      {/* Media Content */}
      {currentItem.type === 'video' ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-cyan-300"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: 0,
                  right: 0,
                  transform: `rotate(${Math.sin(i) * 15}deg)`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
          </div>
        </div>
      ) : (
        <img src={currentItem.url} alt={currentItem.alt} className="w-full h-full object-cover" />
      )}

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaSlider