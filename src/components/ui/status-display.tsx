import { getStatus } from '@/lib/status'

export default async function StatusDisplay() {
  const status = await getStatus()

  return (
    <>
      <h1 className="mt-4 text-lg md:text-xl text-neutral-300 max-w-lg text-center mx-auto mb-10">
        <span className="mr-4"> •❀• </span> STATUS
        <span className={`ml-3 text-center ${status == 'OPEN' ? 'text-green-400 drop-shadow-[0px_0px_23px_rgba(87,227,137,1)]' : 'text-red-400 drop-shadow-[0px_0px_13px_rgba(255,0,123,1)]'}`}>
          {status}
        </span>
        <span className="ml-4"> •❀• </span>
      </h1>
    </>
  )
}
