"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoCardProps {
  src: string
  title: string
  description: string
  category?: string
  poster?: string
}

export function VideoCard({ src, title, description, category, poster }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 card-hover bg-black aspect-[9/14]">
      {/* Video — fills entire card */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />

      {/* Play/pause overlay */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {!playing && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/90 flex items-center justify-center transition-transform hover:scale-110">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-black ml-0.5" fill="currentColor" />
          </div>
        )}
      </button>

      {/* Mute button */}
      {playing && (
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
      )}

      {/* Category badge */}
      {category && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 bg-cyan-500/90 text-black text-[10px] sm:text-xs font-bold rounded-full uppercase">
            {category}
          </span>
        </div>
      )}

      {/* Bottom gradient + title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5">
        <h3 className="text-white font-bold text-sm sm:text-base mb-1">{title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
