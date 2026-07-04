import { NextRequest, NextResponse } from "next/server";

const GATE_CODE = process.env.GATE_CODE ?? "";
const COOKIE_NAME = "abin_access";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Pass through API routes and Next.js internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg"
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  const code = searchParams.get("code");

  // Valid cookie — allow through
  if (GATE_CODE && cookie === GATE_CODE) return NextResponse.next();

  // Valid code in URL — set cookie and redirect to clean URL
  if (GATE_CODE && code === GATE_CODE) {
    const url = req.nextUrl.clone();
    url.searchParams.delete("code");
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE_NAME, GATE_CODE, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
    return res;
  }

  // No GATE_CODE set (local dev) — allow through so dev works without setup
  if (!GATE_CODE) return NextResponse.next();

  // Neither valid cookie nor valid code — return blank page (no hint site exists)
  return new NextResponse(null, { status: 200 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
