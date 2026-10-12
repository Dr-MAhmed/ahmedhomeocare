import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Homeopathic Clinic | Thoughtful, Personal Care",
  description:
    "Meet the doctors at Ahmed Homeopathic Clinic in Faisalabad, explore educational resources, and contact the clinic for appointment information.",
  metadataBase: new URL("https://ahmedhomeocare.com"),
  openGraph: {
    title: "Ahmed Homeopathic Clinic",
    description: "Thoughtful, personal care. Clear information. A conversation that starts with listening.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
