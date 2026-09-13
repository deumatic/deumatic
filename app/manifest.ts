import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deumatic",
    short_name: "Deumatic",
    description: "Digital product and technology partner.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2EA",
    theme_color: "#0B1420",
    icons: [{ src: "/icon.png", sizes: "1536x1536", type: "image/png" }]
  };
}
