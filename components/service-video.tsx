"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface ServiceVideoProps {
  src: string
  title: string
}

export function ServiceVideo({ src, title }: ServiceVideoProps) {
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
    <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-300 bg-black">
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={src}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />

        {/* Play overlay */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/25 transition-colors"
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {!playing && (
            <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex items-center justify-center transition-transform hover:scale-110">
              <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
            </div>
          )}
        </button>

        {/* Mute */}
        {playing && (
          <button
            onClick={(e) => { e.stopPropagation(); toggleMute() }}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
          </button>
        )}

        {/* Title bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
          <p className="text-white text-xs font-medium truncate">{title}</p>
        </div>
      </div>
    </div>
  )
}
