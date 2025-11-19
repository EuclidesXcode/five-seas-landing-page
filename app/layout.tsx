import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five SaaS - Sistema de Emissão de Notas Fiscais",
  description: "Emissão de NFS-e, NF-e e NFC-e com tecnologia de ponta. Escolha o plano ideal para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
