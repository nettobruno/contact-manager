import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Contact Manager – Gerencie seus contatos de forma simples",
  description:
    "Site para gerenciar contatos: cadastre, edite e organize nomes, e-mails e telefones com facilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${schibstedGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
