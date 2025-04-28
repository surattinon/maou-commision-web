"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LangSwitcher from './lang-switcher';

export default function Navbar({params}: {params: {lang: string}}) {
  const dict = await getDictionary(params.lang)

  return (
    <nav className="fixed shadow-md px-6 py-4 w-screen">
      <ul className="flex space-x-6 justify-around">
        <li key={"/"}>
          <Link href={"/"}>
            HOME
          </Link>
        </li>
        <li key={"lang-switcher"}>
          <LangSwitcher currentLang='' />
        </li>
      </ul>
    </nav>
  );
}
