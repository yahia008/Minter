'use client'
import Image from "next/image";
import Headers from '@/components/Header'
import ImageProvider from '@/components/Image'
import { Button } from "@/components/ui/button";
import { useWallet } from '@solana/wallet-adapter-react';
import  { useCallback } from 'react';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from 'react';
//import MyComponent from "@/components/WalletButton";

export default function Home() {
  const { publicKey, connect, disconnect, connected, wallet} = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
   
       <div>
        <header>
              <nav className="flex justify-between items-center sm:pt-5 sm:px-11 p-4">
                <h1 className="text-white sm:text-4xl font-sans font-bold text-lg  ">Minter</h1>
                <div>
      <WalletMultiButton/></div>
               
              
                
              </nav>
          <Headers/>
      
        </header>
        <ImageProvider/>
    

       </div>
  );
}
