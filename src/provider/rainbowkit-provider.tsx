"use client";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider as RainbowKitProvider_,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
type RainbowKitProviderProps = {
  children: React.ReactNode;
};

const config = getDefaultConfig({
  appName: "AE App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();
const RainbowKitProvider = ({ children }: RainbowKitProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider_>{children}</RainbowKitProvider_>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowKitProvider;
