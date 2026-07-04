import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "abin_access";
const COOKIE_VALUE = "granted";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function proxy(req: NextRequest) {
  // Skip gate in local development
  if (process.env.NODE_ENV === "development") return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Always allow through — internals, gate page, and studio access route
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    pathname.startsWith("/gate") ||
    pathname.startsWith("/studio")
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value;

  // Valid cookie — allow through
  if (cookie === COOKIE_VALUE) return NextResponse.next();

  // No access — redirect to gate page
  return NextResponse.redirect(new URL("/gate", req.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
