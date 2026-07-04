import { NextResponse } from "next/server";

const COOKIE_NAME = "abin_access";
const COOKIE_VALUE = "granted";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const res = NextResponse.redirect(new URL("/", origin));

  res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return res;
}
