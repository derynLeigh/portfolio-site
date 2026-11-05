import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Deryn Cullen",
  description: "Deryn Cullen: software developer, technical writer and product owner in Bradford, UK.",
};

// Applies the saved theme and text size before first paint so there's no flash of the wrong palette or size.
const prefsScript = `try{const d=document.documentElement.dataset,t=localStorage.getItem('theme'),s=localStorage.getItem('text');if(t)d.theme=t;if(s)d.text=s}catch{}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prefsScript }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
