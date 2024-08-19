import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "般若田舍",
  description: "线上道场。一起念经,参禅,悟道。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-sm mx-auto">{children}</div>
      </body>
    </html>
  );
}
