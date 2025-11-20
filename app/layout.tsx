import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/ Navbar";

export const metadata: Metadata = {
  title: "Frank Maldonado | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Frank Maldonado - Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main className="space-y-20">{children}</main>
      </body>
    </html>
  );
}
