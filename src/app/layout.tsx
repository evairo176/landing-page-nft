import type { Metadata } from "next";

import "./globals.css";
import RainbowKitProvider from "@/provider/rainbowkit-provider";

export const metadata: Metadata = {
  title: "Buy or Create Your NFTs",
  description: "Step into the world of rare and exclusive digital assets!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-primary antialiased`}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </body>
    </html>
  );
}
