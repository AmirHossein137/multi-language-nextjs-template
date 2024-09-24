import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { pathnames, locales, localPrefix } from "./config";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    pathnames,
    locales,
    localPrefix,
  });
