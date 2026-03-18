"use client"

import { VideoCard } from "@/components/video-card"

const galleryVideos = [
  {
    src: "/videos/content-pack/PPF-mr2 ppf bumper delete.mp4",
    title: "MR2 — PPF Bumper Install",
    description: "Precision PPF application on a Toyota MR2 bumper",
    category: "PPF",
  },
  {
    src: "/videos/content-pack/Detailing-Copy of 0306 (1)(2).mp4",
    title: "Detail Process",
    description: "Comprehensive detailing workflow start to finish",
    category: "Detailing",
  },
  {
    src: "/videos/content-pack/Vinyl Wrap-CyberTruck After.mp4",
    title: "CyberTruck — Vinyl Wrap",
    description: "Complete vinyl wrap transformation",
    category: "Wrap",
  },
  {
    src: "/videos/content-pack/Vinyl Wrap-ppf vs vinyl promo.mp4",
    title: "PPF vs Vinyl — Comparison",
    description: "Understanding the difference between PPF and vinyl",
    category: "Wrap",
  },
]

export function GalleryVideos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {galleryVideos.map((video) => (
        <VideoCard
          key={video.src}
          src={video.src}
          title={video.title}
          description={video.description}
          category={video.category}
        />
      ))}
    </div>
  )
}
