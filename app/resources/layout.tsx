import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Library | Ahmed Homeocare",
  description: "General health education, appointment preparation tips, and medical safety information from Ahmed Homeocare in Faisalabad, Pakistan.",
  alternates: { canonical: "/resources/" },
};

export default function ResourcesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
