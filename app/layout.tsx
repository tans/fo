import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

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
      <head>
        <script
          defer
          src="https://umami.minapp.xin/script.js"
          data-website-id="535f40ad-4bfb-4037-849c-aa661491cc7a"
        ></script>
      </head>
      <body>
        <div className="max-w-screen-sm mx-auto">{children}</div>

        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}
