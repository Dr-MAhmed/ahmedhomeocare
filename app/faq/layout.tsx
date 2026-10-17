import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Ahmed Homeocare",
  description: "Clinic hours, appointment information, visit preparation, and health information safety notes for Ahmed Homeopathic Clinic in Faisalabad.",
};

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
