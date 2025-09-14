import { useFetch } from "./hooks/useFetch";
import LineStatusCard from "./components/LineStatusCard";

function App() {
  const appId = import.meta.env.VITE_TFL_APP_ID;
  const apiKey = import.meta.env.VITE_TFL_API_KEY;
  const auth = appId && apiKey ? `?app_id=${appId}&api_key=${apiKey}` : "";

  const {
    data: lines,
    loading,
    error,
  } = useFetch(`https://api.tfl.gov.uk/Line/Mode/Tube/Status${auth}`);

  return (
    <main>
      <h1>London Tube Status</h1>

      {loading && <p role="status">Loading London Tube statuses...</p>}
      {error && <p role="alert">Error loading London Tube statuses</p>}

      {lines && (
        <section className="line-grid">
          {lines?.map((line) => (
            <LineStatusCard key={line.id} line={line} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
