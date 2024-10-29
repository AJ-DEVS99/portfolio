"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) return src;
  return `ajsportfolio-ajs-projects-e9241afc.vercel.app${src}?w=${width}&q=${
    quality || 75
  }`;
}
