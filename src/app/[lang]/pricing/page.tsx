import Link from "next/link"
import { Home } from "lucide-react"

import { Spotlight } from "@/components/blocks/spotlight-new"
import { GridBackground } from "@/components/blocks/spotlight-new"

import { getDictionary } from '@/lib/dictionary'
import LangSwitcher from "@/components/ui/lang-switcher"


const Price = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="h-screen w-full flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden relative">
      <Spotlight />
      <GridBackground />
      <div className="z-40 fixed w-screen h-10 top-0 p-5 lg:p-10">
        <div className="flex space-x-5">
          <Link
            href={"/"}
            className={`
          px-2 py-2
          border rounded 
          border-[#767676]
          text-[#767676]
          hover:text-white
          hover:border-white
          transition 
          font-medium
          backdrop-blur-sm
          bg-transparent
          backdrop-brightness-100
        `}
          >
            <Home />
          </Link>
          <LangSwitcher currentLang={lang} currentPath="/pricing" />
        </div>
      </div>
      <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full h-screen top-10 md:top-56 pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
          PRICING
        </h1>
        <div>

        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
          {dict.info.priceTitle}
        </h2>
        <ul className="space-y-2 text-white mb-20">
          {dict.pricing.prices.map((price, index) => (
            <li key={index} className="flex items-start">
              <span className="text-white mr-2 text-lg">•</span>
              <span className="text-lg font-normal text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-2" dangerouslySetInnerHTML={{ __html: price }}></span>
            </li>
          ))}
        </ul>

        <div className="flex w-full justify-center space-x-6 mb-20">

        </div>
        <div className="flex w-full justify-center space-x-14 mb-12">
        </div>
      </div>
    </div>
  )
}

export default Price
