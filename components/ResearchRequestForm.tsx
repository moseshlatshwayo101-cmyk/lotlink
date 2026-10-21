"use client";

import { useState } from "react";

const categories = [
  "Vehicles (Cars, SUVs, Pickups, Trucks, Buses)",
  "Industrial / Heavy Equipment",
  "Tools & Hardware",
  "Electronics & IT",
  "Other",
];

const destinations = [
  "Eswatini",
  "South Africa",
  "Namibia",
  "Botswana",
  "Zambia",
  "Mozambique",
  "Kenya",
  "Nigeria",
  "Ghana",
  "Other",
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
];

const urgencies = [
  { value: "standard", label: "Standard (48–72 hours) – $199" },
  { value: "priority", label: "Priority (24 hours) – $349" },
];

export default function ResearchRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [packageLabel, setPackageLabel] = useState("Standard 48–72h – $199");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    language: "en",
    category: "",
    specificRequest: "",
    budget: "",
    destination: "",
    urgency: "standard",
    paymentPreference: "usdt",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please confirm you understand LotLink is a research service only.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/research-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      const json = await res.json();
      if (json.package) setPackageLabel(json.package);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    const amount = formData.urgency === "priority" ? "$349" : "$199";
    return (
      <div className="card" style={{ borderColor: "var(--success)" }}>
        <h3 style={{ color: "var(--success)", marginBottom: "0.75rem" }}>Request received</h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
          We have your details. To start research, pay the report fee in crypto. After payment is
          confirmed, work begins and you receive the report by email.
        </p>

        <div
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            padding: "1rem",
            marginBottom: "1.25rem",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Payment – {packageLabel}</div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
            Send <strong>{amount} USD</strong> equivalent in <strong>USDT</strong> or{" "}
            <strong>USDC</strong>.
          </p>
          <ol style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
            <li>Open your Binance (or other) wallet</li>
            <li>Send USDT or USDC to the LotLink receive address we send you by email/WhatsApp after this request</li>
            <li>Reply with the transaction ID (TxID) so we can confirm</li>
            <li>Research starts after confirmation</li>
          </ol>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
            Preferred networks: USDT TRC20 or USDC on a low-fee network. Always confirm the exact
            address with us before sending large amounts.
          </p>
        </div>

        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          You will also get a short confirmation message. Questions? Reply on WhatsApp/email with your
          name and we will match your request.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-group">
        <label htmlFor="fullName">Full name *</label>
        <input id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone / WhatsApp *</label>
        <input id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="language">Preferred language</label>
        <select id="language" name="language" value={formData.language} onChange={handleChange}>
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category *</label>
        <select id="category" name="category" required value={formData.category} onChange={handleChange}>
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="specificRequest">What are you looking for? *</label>
        <textarea
          id="specificRequest"
          name="specificRequest"
          required
          rows={4}
          value={formData.specificRequest}
          onChange={handleChange}
          placeholder="e.g. 2020+ Toyota Hilux or similar light truck, good condition, for use in South Africa"
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget range (USD) *</label>
        <input
          id="budget"
          name="budget"
          required
          value={formData.budget}
          onChange={handleChange}
          placeholder="e.g. 8000–15000"
        />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination country *</label>
        <select id="destination" name="destination" required value={formData.destination} onChange={handleChange}>
          <option value="">Select destination</option>
          {destinations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="urgency">Package *</label>
        <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
          {urgencies.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="paymentPreference">Preferred payment</label>
        <select
          id="paymentPreference"
          name="paymentPreference"
          value={formData.paymentPreference}
          onChange={handleChange}
        >
          <option value="usdt">USDT (recommended)</option>
          <option value="usdc">USDC</option>
          <option value="either">USDT or USDC</option>
        </select>
      </div>
      <div className="form-group" style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          style={{ width: "auto", marginTop: "0.25rem" }}
        />
        <label htmlFor="consent" style={{ marginBottom: 0 }}>
          I understand LotLink is a research service only. I will buy directly from the official seller. *
        </label>
      </div>
      {status === "error" && (
        <p style={{ color: "#ef4444", marginBottom: "1rem" }}>Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
        style={{ width: "100%" }}
      >
        {status === "submitting" ? "Sending..." : "Submit Research Request"}
      </button>
    </form>
  );
}
