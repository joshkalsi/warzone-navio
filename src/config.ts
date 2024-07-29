import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://joshkalsi.github.io", // replace this with your deployed domain
  author: "Joshua Kalsi",
  profile: "https://joshkalsi.dev/",
  desc: "in the grim darkness of the far future there is only war.",
  title: "Warzone Navio",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};