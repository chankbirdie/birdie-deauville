import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Birdie - Location saisonnière de charme à Deauville",
  description: "Appartement 2 chambres avec vue sur le golf à Deauville. Calme, confort et proximité des attractions. Réservez vos vacances en Normandie !",
  keywords: "location Deauville, appartement Deauville, vacances Deauville, location saisonnière Deauville, golf Deauville, Le Birdie Deauville, hébergement Deauville, Normandie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

