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
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card" style={{ textAlign: "center", borderColor: "var(--success)" }}>
        <h3 style={{ color: "var(--success)", marginBottom: "0.75rem" }}>Request Received</h3>
        <p style={{ color: "var(--text-muted)" }}>
          Thank you. You will receive a confirmation shortly. Standard reports are delivered within 48–72 hours after payment.
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
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category *</label>
        <select id="category" name="category" required value={formData.category} onChange={handleChange}>
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="specificRequest">What are you looking for? *</label>
        <textarea id="specificRequest" name="specificRequest" required rows={4} value={formData.specificRequest} onChange={handleChange} placeholder="e.g. 2020+ Toyota Hilux or similar light truck, good condition, for use in South Africa" />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget range (USD) *</label>
        <input id="budget" name="budget" required value={formData.budget} onChange={handleChange} placeholder="e.g. 8000–15000" />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination country *</label>
        <select id="destination" name="destination" required value={formData.destination} onChange={handleChange}>
          <option value="">Select destination</option>
          {destinations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="urgency">Urgency / Package</label>
        <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
          {urgencies.map((u) => (
            <option key={u.value} value={u.value}>{u.label}</option>
          ))}
        </select>
      </div>
      <div className="form-group" style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
        <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} style={{ width: "auto", marginTop: "0.25rem" }} />
        <label htmlFor="consent" style={{ marginBottom: 0 }}>
          I understand LotLink is a research service only. I will buy directly from the official seller. *
        </label>
      </div>
      {status === "error" && (
        <p style={{ color: "#ef4444", marginBottom: "1rem" }}>Something went wrong. Please try again.</p>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: "100%" }}>
        {status === "submitting" ? "Sending..." : "Submit Research Request"}
      </button>
    </form>
  );
}
