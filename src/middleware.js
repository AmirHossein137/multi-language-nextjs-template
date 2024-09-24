import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  locales,
  defaultLocale: "fa",
});

export const config = {
  matcher: ["/", "/(fa|en)/:path*"],
};
