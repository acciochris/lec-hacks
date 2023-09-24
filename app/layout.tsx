import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "LEC Hacks";
let description = "Lynbrook Engineering Club Hackathon";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/lec-hacks/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
