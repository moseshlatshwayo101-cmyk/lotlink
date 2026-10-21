import Link from "next/link";

export const metadata = {
  title: "Official Surplus Sources – LotLink",
  description: "Directory of verified government and institutional surplus platforms worldwide.",
};

const sources = [
  {
    region: "United States",
    items: [
      { name: "GovDeals", url: "https://www.govdeals.com", note: "State, county, city, school & utility surplus" },
      { name: "GSA Auctions", url: "https://gsaauctions.gov", note: "Federal surplus" },
      { name: "GSA Fleet", url: "https://marketplace.gsafleet.gov", note: "Federal fleet vehicles" },
      { name: "Public Surplus", url: "https://www.publicsurplus.com", note: "Municipal & institutional" },
      { name: "Municibid", url: "https://www.municibid.com", note: "Local government" },
      { name: "GovPlanet", url: "https://www.govplanet.com", note: "Military & heavy equipment" },
    ],
  },
  {
    region: "Canada",
    items: [
      { name: "GCSurplus", url: "https://www.gcsurplus.ca", note: "Federal surplus (PSPC)" },
      { name: "GovDeals Canada", url: "https://www.govdeals.ca", note: "Provincial & municipal" },
    ],
  },
  {
    region: "Europe (selected)",
    items: [
      { name: "Zoll-Auktion (Germany)", url: "https://www.zoll-auktion.de", note: "Customs seizures" },
      { name: "VEBEG (Germany)", url: "https://www.vebeg.de", note: "Federal surplus" },
      { name: "BOE Subastas (Spain)", url: "https://subastas.boe.es", note: "Judicial & administrative" },
      { name: "VeilingDomeinen (Netherlands)", url: "https://www.veilingdomeinen.nl", note: "Seizure & movable property" },
    ],
  },
];

export default function SourcesPage() {
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
            Request research
          </Link>
        </div>
      </header>

      <div className="container">
        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
          Official Surplus Sources
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", maxWidth: 640 }}>
          LotLink only works with legitimate public-sector and institutional platforms.
          Below is a growing directory of verified sources. We research these platforms
          on your behalf and route you to the official seller.
        </p>

        {sources.map((group) => (
          <div key={group.region} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--accent)" }}>
              {group.region}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1rem",
              }}
            >
              {group.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ display: "block" }}
                >
                  <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{item.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.note}</div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "2rem" }}>
          More countries and platforms are being added continuously. Prefer a researched
          shortlist?{" "}
          <Link href="/request">Submit a Research Request</Link>.
        </p>
      </div>
    </div>
  );
}
