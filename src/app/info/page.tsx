import { GridBackground } from "@/components/blocks/spotlight-new"
import { Spotlight } from "@/components/blocks/spotlight-new"

const Info = () => {
  return (
    <div className="h-screen w-full rounded-md flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
          INFO
        </h1>
        <p className="text-normal font-normal text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-20">
          Welcome to MAOU Commissions. We specialize in creating unique, high-quality digital art tailored to your vision. Each piece is crafted with meticulous attention to detail, ensuring that you receive artwork that exceeds your expectations.
        </p>

        <div className="flex w-full justify-center space-x-6 mb-20">

        </div>
        <div className="flex w-full justify-center space-x-14 mb-12">
        </div>
      </div>
    </div>
  )
}

export default Info
