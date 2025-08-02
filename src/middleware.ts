// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/config";
import { routing } from "@/i18n/routing";

// 1. Configure next-intl middleware
const intlMiddleware = createIntlMiddleware(routing);

// 2. Define protected routes (internal paths without locale prefix)
const protectedInternalPaths = [
  "/dashboard", // Example protected route
  // Add more as needed
];

export default async function middleware(request: NextRequest) {
  // 3. First, handle i18n routing
  const response = intlMiddleware(request);

  // 4. Extract pathname without locale
  const pathname = request.nextUrl.pathname;
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  const internalPath = pathLocale
    ? pathname.replace(`/${pathLocale}`, "") || "/"
    : pathname;

  // 5. Check if the internal path is protected
  const isProtected = protectedInternalPaths.some(
    (route) => internalPath === route || internalPath.startsWith(`${route}/`)
  );

  // 6. Handle authentication check
  if (isProtected) {
    const authToken = request.cookies.get("auth_token")?.value;

    if (!authToken) {
      const locale = pathLocale || defaultLocale;
      const loginUrl = new URL(`/${locale}/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Optional: Add token validation logic here
    // if (invalidToken) return NextResponse.redirect(...)
  }

  // 7. Return the response from intl middleware
  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
