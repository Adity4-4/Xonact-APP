import MetricItem from "./CardMetricsItem";

// Metrics Section Component
const MetricsSection = ({ metrics }) => {
  return (
    <div className="border-t border-gray-200 px-4 py-2">
      <div className="flex items-center justify-around divide-x divide-gray-200">
        {metrics.map((metric, idx) => (
          <MetricItem key={idx} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricsSection