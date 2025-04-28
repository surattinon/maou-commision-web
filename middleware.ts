import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of all supported locales
const locales = ['en', 'th']
const defaultLocale = 'en'

// Get locale from cookie, headers, or default
function getLocale(request: NextRequest): string {
  // Check for locale cookie first
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Fall back to Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',').map(l => l.split(';')[0].trim())
    for (const parsedLocale of parsedLocales) {
      if (locales.includes(parsedLocale)) {
        return parsedLocale
      }
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip for assets, api routes, etc
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return NextResponse.next()
  
  // Redirect to locale path
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Skip static files, api routes, etc
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
