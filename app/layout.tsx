import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formstone Labs",
  description:
    "A Connecticut-based software studio building tools for healthcare data and consumer health.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
