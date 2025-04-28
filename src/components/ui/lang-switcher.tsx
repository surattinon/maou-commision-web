'use client'

import Link from 'next/link'
import Flag from 'react-world-flags'

interface LangSwitcherProps {
  currentLang: string;
  currentPath: string;  // The current path without language prefix
}

const LangSwitcher = ({ currentLang, currentPath }: LangSwitcherProps) => {
  console.log({ currentLang, currentPath })

  const otherLang = currentLang === 'en' ? 'th' : 'en'

  return (
    <div className="flex gap-4">
      <Link
        href={`/${otherLang}${currentPath}`}
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
        aria-label={`Switch site to ${otherLang === 'en' ? 'English' : 'ไทย'}`}
      >
        {otherLang.toUpperCase()}
      </Link>
    </div>
  )
}

export default LangSwitcher
