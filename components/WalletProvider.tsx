'use client'
import React, { Children } from 'react'
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
//import {WalletAdapterNetwork} from '@sol'
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const SolanaWalletProvider = ({children}:{children:React.ReactNode}) => {
    const network = WalletAdapterNetwork.Devnet
    const endpoint = useMemo(()=>clusterApiUrl(network),[network]); // Use 'mainnet-beta' for production

    // Memoize wallets to avoid unnecessary re-renders
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default SolanaWalletProvider