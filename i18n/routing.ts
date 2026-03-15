import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "uk"],

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
const res = createNavigation(routing);

export const NextLink = res.Link;
export const redirect = res.redirect;
export const usePathname = res.usePathname;
export const useRouter = res.useRouter;
export const getPathname = res.getPathname;
