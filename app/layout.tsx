import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resonant Studios — Design System",
  description:
    "Design tokens, UI primitives, voice contracts, and accessibility commitments for the Resonant Studios brand. Live styleguide at /design-system.",
  metadataBase: new URL("https://resonantstudios.com.au"),
  icons: {
    icon: [
      { url: "/library/logos/mark-on-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/library/logos/mark-on-light.png", media: "(prefers-color-scheme: light)" },
    ],
    apple: "/library/logos/mark-on-light.png",
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
