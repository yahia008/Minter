import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next";
import { cn } from "@/lib/utils"
import SolanaWalletProvider from "@/components/WalletProvider";


export const metadata: Metadata = {
  title: "Minter",
  description: "prompt minter",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
type RootLayoutProps = {
  children:React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-gray-900 font-sans antialiased",
          fontSans.variable
        )}
      >
        <SolanaWalletProvider>
        {children}
        </SolanaWalletProvider>
       
      </body>
    </html>
  )
}


