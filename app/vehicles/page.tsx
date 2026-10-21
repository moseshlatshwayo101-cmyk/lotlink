"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Vehicle = {
  id: string;
  title: string;
  year: number;
  type: string;
  price: string;
  location: string;
  source: string;
  sourceUrl: string;
  image: string;
  brand: string;
  mileage?: string;
};

const vehicles: Vehicle[] = [
  { id: "gsa-f150-2021", title: "Ford F-150 SuperCrew", year: 2021, type: "Pickup", price: "From $18,400", location: "Texas, USA", source: "GSA Fleet", sourceUrl: "https://marketplace.gsafleet.gov", image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93c0?w=800&q=80", brand: "Ford", mileage: "42,000 mi" },
  { id: "govdeals-camry-2020", title: "Toyota Camry LE", year: 2020, type: "Sedan", price: "From $9,800", location: "Georgia, USA", source: "GovDeals", sourceUrl: "https://www.govdeals.com", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80", brand: "Toyota", mileage: "58,000 mi" },
  { id: "gsa-tahoe-2019", title: "Chevrolet Tahoe LT", year: 2019, type: "SUV", price: "From $16,200", location: "Virginia, USA", source: "GSA Auctions", sourceUrl: "https://gsaauctions.gov", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", brand: "Chevrolet", mileage: "71,000 mi" },
  { id: "publicsurplus-rav4-2022", title: "Toyota RAV4 XLE", year: 2022, type: "SUV", price: "From $21,500", location: "California, USA", source: "Public Surplus", sourceUrl: "https://www.publicsurplus.com", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", brand: "Toyota", mileage: "28,000 mi" },
  { id: "govplanet-hilux-style", title: "Ram 2500 Crew Cab", year: 2018, type: "Pickup", price: "From $14,900", location: "Arizona, USA", source: "GovPlanet", sourceUrl: "https://www.govplanet.com", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80", brand: "Ram", mileage: "89,000 mi" },
  { id: "gsa-malibu-2021", title: "Chevrolet Malibu LT", year: 2021, type: "Sedan", price: "From $8,600", location: "Ohio, USA", source: "GSA Fleet", sourceUrl: "https://marketplace.gsafleet.gov", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", brand: "Chevrolet", mileage: "51,000 mi" },
  { id: "municibid-explorer-2020", title: "Ford Explorer XLT", year: 2020, type: "SUV", price: "From $13,700", location: "Pennsylvania, USA", source: "Municibid", sourceUrl: "https://www.municibid.com", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80", brand: "Ford", mileage: "64,000 mi" },
  { id: "govdeals-corolla-2019", title: "Toyota Corolla LE", year: 2019, type: "Sedan", price: "From $7,200", location: "Florida, USA", source: "GovDeals", sourceUrl: "https://www.govdeals.com", image: "https://images.unsplash.com/photo-1623869675781-0f85078af294?w=800&q=80", brand: "Toyota", mileage: "76,000 mi" },
];

const types = ["All", "SUV", "Sedan", "Pickup", "Electric"];
const brands = ["All", "Toyota", "Ford", "Chevrolet", "Ram"];

export default function VehiclesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [brand, setBrand] = useState("All");

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const q = query.toLowerCase();
      const matchesQuery = !q || v.title.toLowerCase().includes(q) || v.brand.toLowerCase().includes(q) || v.location.toLowerCase().includes(q) || v.source.toLowerCase().includes(q);
      const matchesType = type === "All" || v.type === type;
      const matchesBrand = brand === "All" || v.brand === brand;
      return matchesQuery && matchesType && matchesBrand;
    });
  }, [query, type, brand]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <header style={{ borderBottom: "1px solid var(--border)", padding: "0.85rem 0", position: "sticky", top: 0, background: "rgba(15, 23, 42, 0.96)", backdropFilter: "blur(10px)", zIndex: 40 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1.05rem" }}>← LotLink</Link>
          <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Vehicles</div>
          <Link href="/request" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>Request research</Link>
        </div>
      </header>

      <div className="container" style={{ paddingTop: "1.75rem", paddingBottom: "3rem" }}>
        <div className="card" style={{ marginBottom: "1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", border: "1px solid #1e4a6e" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>Find surplus vehicles</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.1rem", fontSize: "0.95rem" }}>
            Browse representative public-sector fleet and surplus opportunities. Listings link to official platforms. LotLink researches and verifies — you buy directly from the seller.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search cars, brands, locations..." style={{ flex: "1 1 220px", minWidth: 0 }} />
            <Link href="/request" className="btn btn-primary">Get verified report</Link>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {types.map((t) => (
            <button key={t} type="button" onClick={() => setType(t)} style={{ padding: "0.45rem 0.9rem", borderRadius: "999px", border: type === t ? "1px solid var(--accent)" : "1px solid var(--border)", background: type === t ? "rgba(34, 211, 238, 0.15)" : "var(--bg-secondary)", color: type === t ? "var(--accent)" : "var(--text-secondary)", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>{t}</button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {brands.map((b) => (
            <button key={b} type="button" onClick={() => setBrand(b)} style={{ padding: "0.4rem 0.75rem", borderRadius: "0.4rem", border: brand === b ? "1px solid var(--accent)" : "1px solid var(--border)", background: brand === b ? "rgba(34, 211, 238, 0.12)" : "transparent", color: brand === b ? "var(--accent)" : "var(--text-muted)", cursor: "pointer", fontSize: "0.8rem" }}>{b}</button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{filtered.length} opportunities shown</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Sample patterns from official platforms · Not live inventory</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.1rem" }}>
          {filtered.map((v) => (
            <Link key={v.id} href={`/vehicles/${v.id}`} className="card" style={{ display: "block", padding: 0, overflow: "hidden" }}>
              <div style={{ height: 160, background: `linear-gradient(180deg, transparent 40%, #0f172a 100%), url(${v.image}) center/cover` }} />
              <div style={{ padding: "1rem 1.1rem 1.15rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                  <strong style={{ fontSize: "1rem" }}>{v.title}</strong>
                  <span style={{ color: "var(--accent)", fontWeight: 700, whiteSpace: "nowrap" }}>{v.price}</span>
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.55rem" }}>{v.year} · {v.type}{v.mileage ? ` · ${v.mileage}` : ""}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem" }}>
                  <span style={{ color: "var(--text-secondary)" }}>{v.location}</span>
                  <span style={{ background: "rgba(34, 211, 238, 0.12)", color: "var(--accent)", padding: "0.2rem 0.5rem", borderRadius: "0.3rem", fontWeight: 600 }}>{v.source}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="card" style={{ textAlign: "center", marginTop: "1rem" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>No sample matches. Request a custom research report.</p>
            <Link href="/request" className="btn btn-primary">Request research</Link>
          </div>
        )}

        <div className="card" style={{ marginTop: "2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Need a verified shortlist?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1rem", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            These cards illustrate typical surplus patterns. For current live lots and landed-cost estimates, order a Verified Research Report.
          </p>
          <Link href="/request" className="btn btn-primary">Request a Research Report — from $199</Link>
        </div>
      </div>
    </div>
  );
}
