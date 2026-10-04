import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

// Regenerate prerendered pages daily so the footer's copyright year rolls over without a redeploy.
export const revalidate = 86400;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vantage Electrical",
    default: "Vantage Electrical | Local Electricians for Homes & Businesses",
  },
  description:
    "Vantage Electrical provides fast, reliable emergency repairs and residential and commercial electrical work for homes and businesses in your local area.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
