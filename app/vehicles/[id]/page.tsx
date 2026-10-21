import Link from "next/link";
import { notFound } from "next/navigation";

const vehicles: Record<string, {
  id: string; title: string; subtitle: string; year: number; type: string; price: string;
  location: string; source: string; sourceUrl: string; image: string; brand: string;
  mileage: string; specs: { label: string; value: string }[]; features: string[]; about: string;
}> = {
  "gsa-f150-2021": {
    id: "gsa-f150-2021", title: "Ford F-150 SuperCrew", subtitle: "Fleet surplus · Light duty pickup",
    year: 2021, type: "Pickup", price: "From $18,400", location: "Texas, USA", source: "GSA Fleet",
    sourceUrl: "https://marketplace.gsafleet.gov",
    image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93c0?w=1200&q=80", brand: "Ford", mileage: "42,000 mi",
    specs: [{ label: "Year", value: "2021" }, { label: "Mileage", value: "42,000 mi" }, { label: "Type", value: "Pickup" }, { label: "Condition", value: "Fleet" }],
    features: ["SuperCrew cab configuration", "Typically well-maintained agency use", "Title verified only via official platform", "Buyer completes purchase on GSA Fleet"],
    about: "Representative late-model light-duty pickup pattern from U.S. federal fleet channels. Actual lots must be checked on the official platform. LotLink does not own or sell this vehicle.",
  },
  "govdeals-camry-2020": {
    id: "govdeals-camry-2020", title: "Toyota Camry LE", subtitle: "Municipal fleet · Sedan",
    year: 2020, type: "Sedan", price: "From $9,800", location: "Georgia, USA", source: "GovDeals",
    sourceUrl: "https://www.govdeals.com",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80", brand: "Toyota", mileage: "58,000 mi",
    specs: [{ label: "Year", value: "2020" }, { label: "Mileage", value: "58,000 mi" }, { label: "Type", value: "Sedan" }, { label: "Condition", value: "Municipal" }],
    features: ["Common city / county fleet sedan", "Inspect photos on GovDeals", "Shipping is buyer responsibility", "Purchase only through official auction"],
    about: "Illustrative municipal surplus sedan. Live inventory changes daily. Request LotLink research for a shortlist matched to your budget and destination.",
  },
  "gsa-tahoe-2019": {
    id: "gsa-tahoe-2019", title: "Chevrolet Tahoe LT", subtitle: "Federal surplus · Full-size SUV",
    year: 2019, type: "SUV", price: "From $16,200", location: "Virginia, USA", source: "GSA Auctions",
    sourceUrl: "https://gsaauctions.gov",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80", brand: "Chevrolet", mileage: "71,000 mi",
    specs: [{ label: "Year", value: "2019" }, { label: "Mileage", value: "71,000 mi" }, { label: "Type", value: "SUV" }, { label: "Condition", value: "Federal" }],
    features: ["Full-size agency SUV pattern", "Confirm current bid on GSA", "Export rules apply per destination", "LotLink provides research only"],
    about: "Example federal surplus SUV pattern. Always verify the live lot and terms on the official GSA page.",
  },
  "publicsurplus-rav4-2022": {
    id: "publicsurplus-rav4-2022", title: "Toyota RAV4 XLE", subtitle: "Institutional surplus · Compact SUV",
    year: 2022, type: "SUV", price: "From $21,500", location: "California, USA", source: "Public Surplus",
    sourceUrl: "https://www.publicsurplus.com",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80", brand: "Toyota", mileage: "28,000 mi",
    specs: [{ label: "Year", value: "2022" }, { label: "Mileage", value: "28,000 mi" }, { label: "Type", value: "SUV" }, { label: "Condition", value: "Institutional" }],
    features: ["Lower-mileage institutional pattern", "Check Public Surplus for current listings", "Buyer handles logistics", "Research report can include landed-cost notes"],
    about: "School and institutional fleets sometimes dispose of late-model SUVs. Pattern example only — not a live guarantee.",
  },
  "govplanet-hilux-style": {
    id: "govplanet-hilux-style", title: "Ram 2500 Crew Cab", subtitle: "Heavy-duty · Work truck",
    year: 2018, type: "Pickup", price: "From $14,900", location: "Arizona, USA", source: "GovPlanet",
    sourceUrl: "https://www.govplanet.com",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80", brand: "Ram", mileage: "89,000 mi",
    specs: [{ label: "Year", value: "2018" }, { label: "Mileage", value: "89,000 mi" }, { label: "Type", value: "Pickup" }, { label: "Condition", value: "Heavy duty" }],
    features: ["Heavy-duty crew cab pattern", "Often via military / surplus channels", "Inspect condition grades carefully", "Export feasibility varies by market"],
    about: "Heavy-duty pickups appear regularly on surplus platforms. Confirm actual lot details before planning a purchase.",
  },
  "gsa-malibu-2021": {
    id: "gsa-malibu-2021", title: "Chevrolet Malibu LT", subtitle: "Fleet sedan",
    year: 2021, type: "Sedan", price: "From $8,600", location: "Ohio, USA", source: "GSA Fleet",
    sourceUrl: "https://marketplace.gsafleet.gov",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80", brand: "Chevrolet", mileage: "51,000 mi",
    specs: [{ label: "Year", value: "2021" }, { label: "Mileage", value: "51,000 mi" }, { label: "Type", value: "Sedan" }, { label: "Condition", value: "Fleet" }],
    features: ["Common agency sedan", "Mid mileage typical for fleet cycles", "Official platform has current photos", "Research can match similar lots to budget"],
    about: "Fleet sedans turn over regularly. Use as a pattern reference and request a report for import planning.",
  },
  "municibid-explorer-2020": {
    id: "municibid-explorer-2020", title: "Ford Explorer XLT", subtitle: "Municipal / public safety pattern",
    year: 2020, type: "SUV", price: "From $13,700", location: "Pennsylvania, USA", source: "Municibid",
    sourceUrl: "https://www.municibid.com",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80", brand: "Ford", mileage: "64,000 mi",
    specs: [{ label: "Year", value: "2020" }, { label: "Mileage", value: "64,000 mi" }, { label: "Type", value: "SUV" }, { label: "Condition", value: "Municipal" }],
    features: ["Municipal SUV pattern", "Some units may have public-safety history", "Always read lot notes on Municibid", "Buyer verifies title on the platform"],
    about: "Local government SUVs are frequently auctioned. Condition varies — official listing notes are the source of truth.",
  },
  "govdeals-corolla-2019": {
    id: "govdeals-corolla-2019", title: "Toyota Corolla LE", subtitle: "City fleet · Compact sedan",
    year: 2019, type: "Sedan", price: "From $7,200", location: "Florida, USA", source: "GovDeals",
    sourceUrl: "https://www.govdeals.com",
    image: "https://images.unsplash.com/photo-1623869675781-0f85078af294?w=1200&q=80", brand: "Toyota", mileage: "76,000 mi",
    specs: [{ label: "Year", value: "2019" }, { label: "Mileage", value: "76,000 mi" }, { label: "Type", value: "Sedan" }, { label: "Condition", value: "City fleet" }],
    features: ["High-demand compact for many markets", "City fleet turnover pattern", "Confirm odometer on GovDeals", "Import rules depend on destination"],
    about: "Compact sedans from city fleets can suit export buyers when condition and price align. Always verify the live auction page.",
  },
};

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const v = vehicles[params.id];
  if (!v) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <header style={{ borderBottom: "1px solid var(--border)", padding: "0.85rem 0", position: "sticky", top: 0, background: "rgba(15, 23, 42, 0.96)", backdropFilter: "blur(10px)", zIndex: 40 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <Link href="/vehicles" style={{ fontWeight: 600, color: "var(--text-primary)" }}>← Vehicles</Link>
          <Link href="/request" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>Request research</Link>
        </div>
      </header>

      <div className="container" style={{ paddingTop: "1.5rem", paddingBottom: "3rem", maxWidth: 900 }}>
        <div style={{ borderRadius: "0.85rem", overflow: "hidden", border: "1px solid var(--border)", marginBottom: "1.25rem", height: 280, background: `linear-gradient(180deg, transparent 30%, #0f172a 100%), url(${v.image}) center/cover` }} />

        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
          <div>
            <h1 style={{ fontSize: "1.65rem", marginBottom: "0.25rem" }}>{v.title}</h1>
            <p style={{ color: "var(--text-muted)" }}>{v.subtitle}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent)" }}>{v.price}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{v.location}</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "0.75rem", margin: "1.25rem 0" }}>
          {v.specs.map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.9rem 0.5rem" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{s.label}</div>
              <div style={{ fontWeight: 700 }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginBottom: "1rem" }}>
          <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>About this opportunity</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1rem" }}>{v.about}</p>
          <ul style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {v.features.map((f) => (<li key={f}>{f}</li>))}
          </ul>
        </div>

        <div className="card" style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Official source</div>
              <div style={{ fontWeight: 700 }}>{v.source}</div>
            </div>
            <a href={v.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: "0.9rem" }}>Open official platform →</a>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/request" className="btn btn-primary">Request verified research for this type</Link>
          <Link href="/vehicles" className="btn btn-secondary">Back to vehicles</Link>
        </div>

        <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          Disclaimer: Representative surplus patterns for research planning. LotLink does not sell vehicles or guarantee availability. Purchase only through the official seller.
        </p>
      </div>
    </div>
  );
}
