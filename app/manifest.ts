import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Detail Clinic",
    short_name: "Detail Clinic",
    description: "Premium auto protection & detailing in Fullerton, CA. PPF, ceramic tinting, ceramic coating, and professional detailing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#00d4ff",
    orientation: "portrait-primary",
    categories: ["automotive", "business"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
