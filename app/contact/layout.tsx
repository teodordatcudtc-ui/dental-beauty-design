import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează Dental Beauty Design Constanta — programează o consultație gratuită la 0771 438 955. Bd. Alexandru Lăpușneanu 106, bl. L1, sc. B, Constanța.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
