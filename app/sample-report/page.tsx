import Link from "next/link";

export const metadata = {
  title: "Sample Verified Report – LotLink",
  description: "See an example of a LotLink Verified Research Report.",
};

export default function SampleReportPage() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "3rem" }}>
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "1rem 0",
          marginBottom: "2rem",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: "1.15rem", color: "var(--text-primary)" }}>
            ← LotLink
          </Link>
          <Link href="/request" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
            Request your report
          </Link>
        </div>
      </header>

      <div className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
          Sample Verified Research Report
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
          This is an example of the structured report clients receive. Every report is
          human-reviewed and links only to official sources.
        </p>

        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "var(--accent)" }}>
            Report ID: LL-VEH-2026-SAMPLE
          </h2>
          <p style={{ marginBottom: "0.75rem" }}>
            <strong>Category:</strong> Vehicles – Light Commercial / Pickup
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            <strong>Destination considered:</strong> South Africa
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            <strong>Scope:</strong> Current public surplus and fleet disposal opportunities
            for late-model pickups and light trucks on major U.S. government platforms.
          </p>
          <hr style={{ borderColor: "var(--border)", margin: "1.25rem 0" }} />
          <h3 style={{ marginBottom: "0.5rem" }}>What you receive in a full report</h3>
          <ul style={{ color: "var(--text-secondary)", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
            <li>Verified current listings from official platforms</li>
            <li>Key details (year, mileage range, location, estimated current bid)</li>
            <li>Estimated landed cost notes for your destination</li>
            <li>Risks and practical next steps</li>
            <li>Direct links to the official auction pages</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/request" className="btn btn-primary">
            Request your own report – from $199
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
