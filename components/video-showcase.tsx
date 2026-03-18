"use client"

import { VideoCard } from "@/components/video-card"

const videos = [
  {
    src: "/videos/content-pack/Misc.-Main Edit.mp4",
    title: "The Detail Clinic — Main Edit",
    description: "Premium auto protection and detailing showcase",
    category: "Featured",
  },
  {
    src: "/videos/content-pack/Misc.-Hype Edit.mp4",
    title: "The Detail Clinic — Hype Edit",
    description: "High-energy showcase of our craftsmanship",
    category: "Featured",
  },
  {
    src: "/videos/content-pack/PPF-911 ppf & tint montage.mp4",
    title: "Porsche 911 — PPF & Tint",
    description: "Full PPF and ceramic tint montage on a Porsche 911",
    category: "PPF",
  },
]

export function VideoShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {videos.map((video) => (
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
