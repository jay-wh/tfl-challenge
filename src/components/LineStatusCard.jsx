export default function LineStatusCard({ line }) {
  const status = line.lineStatuses?.[0]?.statusSeverityDescription || "Unknown";

  return (
    <div
      className="line-card"
      aria-label={`Status for ${line.name} line`}
      tabIndex={0}
    >
      <h2>{line.name}</h2>
      <p aria-live="polite">{status}</p>
    </div>
  );
}
