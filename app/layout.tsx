import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resonant Studios — Design System",
  description:
    "Design tokens, UI primitives, voice contracts, and accessibility commitments for the Resonant Studios brand. Live styleguide at /design-system.",
  metadataBase: new URL("https://resonantstudios.com.au"),
  icons: {
    // Theme-agnostic app icon — wood-trimmed squircle on a transparent canvas,
    // so a single asset works for light, dark, and glass-backed contexts.
    icon: "/library/logos/app-icon--speaker-mesh.png",
    apple: "/library/logos/app-icon--speaker-mesh.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
