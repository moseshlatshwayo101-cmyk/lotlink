import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HomePage() {
  return (
    <div>
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "1rem 0",
          position: "sticky",
          top: 0,
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(8px)",
          zIndex: 50,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "#0f172a",
                fontSize: "0.9rem",
              }}
            >
              L
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.15rem" }}>LotLink</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Find. Verify. Buy.</div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/#how-it-works" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              How it works
            </Link>
            <Link href="/sources" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Sources
            </Link>
            <Link href="/sample-report" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Sample Report
            </Link>
            <LanguageSwitcher />
            <Link href="/request" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
              Start Research
            </Link>
          </nav>
        </div>
      </header>

      <section style={{ padding: "4rem 0 3rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 780 }}>
          <p
            style={{
              color: "var(--accent)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Global Public Surplus Research
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Government Surplus.
            <br />
            Public Auctions.
            <br />
            <span style={{ color: "var(--accent)" }}>Real Opportunities.</span>
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.15rem",
              marginBottom: "2rem",
              maxWidth: 620,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            LotLink researches and verifies legitimate government and institutional surplus
            opportunities worldwide. We explain the opportunity and route you to the official
            seller. You buy directly. We charge for the intelligence.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/request" className="btn btn-primary" style={{ fontSize: "1.05rem" }}>
              Request a Research Report
            </Link>
            <Link href="/sample-report" className="btn btn-secondary" style={{ fontSize: "1.05rem" }}>
              See Sample Report
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "1.5rem 0",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
          }}
        >
          <span>✓ Verified official sources only</span>
          <span>✓ Human-reviewed reports</span>
          <span>✓ Multi-language (EN / FR / PT)</span>
          <span>✓ You buy directly from the seller</span>
        </div>
      </section>

      <section id="how-it-works" style={{ padding: "4rem 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", marginBottom: "2.5rem" }}>
            How LotLink Works
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                step: "1",
                title: "Tell us what you need",
                text: "Submit a research request with the category, destination country, and budget range.",
              },
              {
                step: "2",
                title: "We research & verify",
                text: "We search official government and institutional platforms, check legitimacy, and estimate landed costs.",
              },
              {
                step: "3",
                title: "You receive a clear report",
                text: "A structured Verified Research Report with links, risks, and next steps. You decide and buy directly.",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    color: "#0f172a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 0 4rem", background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", marginBottom: "0.5rem" }}>
            Popular Categories
          </h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "2rem" }}>
            We research opportunities across these high-demand areas
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            {["Vehicles & Fleet", "Heavy Equipment", "Generators & Power", "Electronics & IT", "Tools & Hardware", "School & Office"].map(
              (cat) => (
                <div key={cat} className="card" style={{ textAlign: "center", padding: "1.25rem 1rem" }}>
                  <div style={{ fontWeight: 600 }}>{cat}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Ready to find a real opportunity?</h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "1.75rem",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Standard Verified Reports start at $199. You receive a clear, human-reviewed report and buy
            only if it makes sense for you.
          </p>
          <Link href="/request" className="btn btn-primary" style={{ fontSize: "1.05rem" }}>
            Start a Research Request
          </Link>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2rem 0",
          color: "var(--text-muted)",
          fontSize: "0.85rem",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "0.5rem" }}>
            LotLink is a research and verification service. We do not sell assets or take possession of
            goods. Clients purchase directly from official sellers.
          </p>
          <p>© {new Date().getFullYear()} LotLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
