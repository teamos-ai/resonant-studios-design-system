import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resonant Studios — Music-based NDIS support",
  description:
    "We work with self-managed and plan-managed NDIS participants through personalised music sessions that build confidence, skill, and self-expression — ending, if you want, in a Spotify-ready song that's really yours.",
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
