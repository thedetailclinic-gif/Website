"use client"

import { QRCodeSVG } from "qrcode.react"

interface QRCodeBlockProps {
  url: string
  size?: number
  label?: string
}

export function QRCodeBlock({ url, size = 140, label }: QRCodeBlockProps) {
  return (
    <div className="bg-white rounded-xl p-3 mx-auto flex items-center justify-center" style={{ width: size + 24, height: size + 24 }}>
      <QRCodeSVG
        value={url}
        size={size}
        level="H"
        bgColor="#ffffff"
        fgColor="#0a0a0a"
        imageSettings={label ? {
          src: "",
          height: 0,
          width: 0,
          excavate: false,
        } : undefined}
      />
    </div>
  )
}
