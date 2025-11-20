import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "fr"];
const defaultLocale = "en";

// Get the preferred locale from headers
function getLocale(request: NextRequest) {
    const headers = { "accept-language": request.headers.get("accept-language") || "" };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // 1. Check for Password Protection (skip for login page, api, and static assets)
    const isPasswordProtected = process.env.SITE_PASSWORD_PROTECTION === "true";
    const hasAccess = request.cookies.get("compass_access");

    if (
        isPasswordProtected &&
        !hasAccess &&
        !pathname.startsWith("/login") &&
        !pathname.startsWith("/api") &&
        !pathname.startsWith("/_next") &&
        !pathname.includes(".") // Skip files like favicon.ico, robots.txt
    ) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // 2. Handle i18n Routing
    // Skip if path is already localized or is a system path
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (
        pathnameIsMissingLocale &&
        !pathname.startsWith("/login") &&
        !pathname.startsWith("/api") &&
        !pathname.startsWith("/_next") &&
        !pathname.includes(".")
    ) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
    ],
};
