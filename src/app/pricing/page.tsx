
import { GridBackground } from "@/components/blocks/spotlight-new"
import { Spotlight } from "@/components/blocks/spotlight-new"

const Pricing = () => {
  return (
    <div className="h-screen w-full rounded-md flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
          PRICING
        </h1>

        <div className="flex w-full justify-center space-x-6 mb-20">

        </div>
        <div className="flex w-full justify-center space-x-14 mb-12">
        </div>
      </div>
    </div>
  )
}

export default Pricing
