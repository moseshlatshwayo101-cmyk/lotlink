import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LotLink – Find. Verify. Buy. Government & Public Surplus Worldwide",
  description:
    "LotLink researches and verifies legitimate government and institutional surplus opportunities worldwide. We help buyers discover real opportunities and route them to the official seller.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
