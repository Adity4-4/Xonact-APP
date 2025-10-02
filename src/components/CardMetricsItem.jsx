import { useState } from "react";

// Metric Item Component
const MetricItem = ({ icon: Icon, value, label }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors py-2 rounded-lg flex-1"
    >
      <Icon
        className={`w-6 h-6 transition-colors ${
          isActive ? 'text-blue-600 fill-blue-600' : 'text-gray-600'
        }`}
      />
      <span className="text-sm font-semibold text-gray-900">{value}</span>
      {label && <span className="text-xs text-gray-500">{label}</span>}
    </button>
  );
};

export default MetricItem