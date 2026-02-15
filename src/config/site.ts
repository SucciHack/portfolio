import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#faf5ff", // purple-50
  dark: "#1e1b4b", // indigo-950
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Sponsors",
  //   href: "/sponsors",
  // },
]

export const GITHUB_USERNAME = "SucciHack"
export const SOURCE_CODE_GITHUB_REPO = "SucciHack/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/SucciHack/portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/SucciHack"

export const UTM_PARAMS = {
  utm_source: "portfolio",
}
