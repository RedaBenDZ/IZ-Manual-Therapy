import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IZ Manual Therapy",
    template: "%s | IZ Manual Therapy",
  },
  description: "Home-visit manual therapy and massage treatments across South-East London.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 rounded bg-cta px-3 py-2 text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
