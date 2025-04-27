import { Suspense } from "react";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";
import Link from "next/link";
import { Facebook, Twitter } from 'lucide-react';
import { HoverButton } from "@/components/ui/hover-button"
import StatusDisplay from "@/components/ui/status-display";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-8xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
          MAOU
        </h1>
        <h1 className="text-sm md:text-xl tracking-[1em] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-20">
          COMMISSION
        </h1>
        <Suspense fallback={<div>Loading status...</div>}>
          <StatusDisplay />
        </Suspense>

        <div className="w-full h-px bg-gray-600 mb-12 opacity-50"></div>

        <div className="flex w-full justify-center space-x-6 mb-20">
          <Link href="/info">
            <HoverButton className="text-white">INFO</HoverButton>
          </Link>
          <Link href="/pricing">
            <HoverButton className="text-white">PRICE</HoverButton>
          </Link>

        </div>
        <div className="flex w-full justify-center space-x-14 mb-12">
          <Link href="/info" className="text-white drop-shadow-[0px_0px_15px_rgba(255,255,255,1)]">
            <Facebook />
          </Link>
          <Link href="/price" className="text-white drop-shadow-[0px_0px_15px_rgba(255,255,255,1)]">
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
}
