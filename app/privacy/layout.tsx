import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Ahmed Homeocare",
  description: "Privacy information for visitors contacting Ahmed Homeopathic Clinic through the Ahmed Homeocare website.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
