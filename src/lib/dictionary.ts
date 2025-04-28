import 'server-only'

interface Dictionary {
  [key: string]: any
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  th: () => import('@/dictionaries/th.json').then(module => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries['en']()
}
