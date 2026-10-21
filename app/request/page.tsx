import ResearchRequestForm from "@/components/ResearchRequestForm";
import Link from "next/link";

export const metadata = {
  title: "Request Research – LotLink",
  description: "Submit a research request for government and public surplus opportunities.",
};

export default function RequestPage() {
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
          <Link href="/sample-report" style={{ fontSize: "0.9rem" }}>
            See sample report
          </Link>
        </div>
      </header>

      <div className="container" style={{ maxWidth: 640 }}>
        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Research Request</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
          Tell us what you are looking for. We will research official sources, verify legitimacy,
          and deliver a clear report. Standard reports are $199. Priority (24h) is $349.
        </p>
        <ResearchRequestForm />
      </div>
    </div>
  );
}
