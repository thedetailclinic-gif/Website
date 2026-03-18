import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryVideos } from "@/components/gallery-videos"
import Image from "next/image"
import { Camera, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery — Our Work & Shop",
  description: "See our work at The Detail Clinic in Fullerton, CA. Browse photos of PPF installations, ceramic coatings, window tinting, and our professional detailing facility with hexagonal LED lighting.",
  alternates: { canonical: "https://thedetailclinic.com/gallery" },
  openGraph: {
    title: "Gallery | The Detail Clinic",
    description: "A look inside our shop and the quality craftsmanship we deliver on every vehicle.",
    url: "https://thedetailclinic.com/gallery",
    images: [{ url: "/images/IMG_3560.jpg", width: 1200, height: 630, alt: "Exotic cars at The Detail Clinic" }],
  },
}

/* ── Photo rows ── */
const heroImages = [
  { src: "/images/main-corvette-3.jpg", alt: "Blue C8 Corvette Stingray — full protection package", category: "Featured" },
  { src: "/images/content-pack/Misc.-DJI_0370.jpg", alt: "Aerial drone shot of The Detail Clinic shop", category: "Featured" },
  { src: "/images/content-pack/Misc.-Copy of P1315730.jpg", alt: "Premium vehicle showcase at The Detail Clinic", category: "Featured" },
]

const ppfImages = [
  { src: "/images/content-pack/PPF-IMG_4643.jpg", alt: "PPF installation — precision application process", category: "PPF" },
  { src: "/images/content-pack/PPF-IMG_4644.jpg", alt: "PPF film being applied to vehicle panel", category: "PPF" },
  { src: "/images/content-pack/PPF-IMG_4645.jpg", alt: "Completed PPF installation — flawless finish", category: "PPF" },
  { src: "/images/work-4.png", alt: "PPF installation on headlight — film being applied", category: "PPF" },
]

const tintImages = [
  { src: "/images/content-pack/Ceramic Tints-P1349938.jpg", alt: "Professional ceramic window tinting — Mercedes installation", category: "Tinting" },
  { src: "/images/content-pack/Ceramic Tints-P1350200.jpg", alt: "Ceramic tint application — precision work", category: "Tinting" },
  { src: "/images/content-pack/Ceramic Tints-Copy of P1291724.jpg", alt: "Window tinting process — professional installation", category: "Tinting" },
  { src: "/images/content-pack/Ceramic Tints-Copy of P1291746.jpg", alt: "Ceramic tint results — heat rejection technology", category: "Tinting" },
]

const ceramicImages = [
  { src: "/images/content-pack/Ceramic Coating-IMG_0003.jpg", alt: "Ceramic coating application — premium protection", category: "Ceramic" },
  { src: "/images/content-pack/Ceramic Coating-IMG_0934.jpg", alt: "Ceramic coating finish — 9H hardness protection", category: "Ceramic" },
]

const wrapImages = [
  { src: "/images/content-pack/Vinyl Wrap-IMG_0010.jpg", alt: "Vinyl wrap installation — custom transformation", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-IMG_0011.jpg", alt: "Vinyl wrap process — precision application", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-IMG_2673.jpg", alt: "Vinyl wrap result — flawless finish", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-IMG_2675.jpg", alt: "Custom vinyl wrap — premium quality", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-IMG_2677.jpg", alt: "Vinyl wrap detail — professional craftsmanship", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-IMG_2678.jpg", alt: "Vinyl wrap transformation — before and after", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-IMG_2680.jpg", alt: "Vinyl wrap installation — custom design", category: "Wrap" },
  { src: "/images/content-pack/Vinyl Wrap-P1316726.jpg", alt: "Vinyl wrap showcase — premium finish", category: "Wrap" },
  { src: "/images/work-6.png", alt: "Red Lamborghini Huracán with custom wrap", category: "Wrap" },
]

const moreImages = [
  { src: "/images/main-corvette-2.jpg", alt: "Blue C8 Corvette — flawless front view after coating", category: "Featured" },
  { src: "/images/main-img_4645.jpg", alt: "Blue C8 Corvette — side profile with full body protection", category: "Featured" },
  { src: "/images/content-pack/Detailing-P1316563.jpg", alt: "Professional auto detailing — comprehensive service", category: "Detailing" },
  { src: "/images/work-7.png", alt: "BMW foam wash pre-detail preparation", category: "Detailing" },
  { src: "/images/work-2.png", alt: "White Lamborghini in The Detail Clinic shop", category: "Shop" },
  { src: "/images/IMG_3560.jpg", alt: "Porsche, Ferrari, Lamborghini lineup", category: "Shop" },
  { src: "/images/IMG_3559.jpg", alt: "Blue GT-R with The Detail Clinic branding", category: "Shop" },
]

function GalleryImage({ img }: { img: { src: string; alt: string; category: string } }) {
  return (
    <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
      <div className="aspect-[4/3] relative w-full">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1 bg-cyan-500/90 text-black text-[10px] sm:text-xs font-bold rounded-full uppercase">
            {img.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <p className="text-white text-xs sm:text-sm font-medium leading-snug">{img.alt}</p>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ icon: Icon, label }: { icon: typeof Camera; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 sm:mb-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
        <Icon className="w-4 h-4 text-cyan-400" />
        <span className="text-cyan-400 text-sm font-medium">{label}</span>
      </div>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  )
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1628] to-black" />
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">GALLERY</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            A look inside our shop and the quality craftsmanship we deliver on every vehicle
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          {/* ── Featured hero row ── */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {heroImages.map((img, i) => <GalleryImage key={i} img={img} />)}
            </div>
          </div>

          {/* ── Videos ── */}
          <div>
            <SectionLabel icon={Play} label="Videos" />
            <GalleryVideos />
          </div>

          {/* ── PPF ── */}
          <div>
            <SectionLabel icon={Camera} label="Paint Protection Film" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {ppfImages.map((img, i) => <GalleryImage key={i} img={img} />)}
            </div>
          </div>

          {/* ── Tinting ── */}
          <div>
            <SectionLabel icon={Camera} label="Window Tinting" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {tintImages.map((img, i) => <GalleryImage key={i} img={img} />)}
            </div>
          </div>

          {/* ── Ceramic Coating ── */}
          <div>
            <SectionLabel icon={Camera} label="Ceramic Coating" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {ceramicImages.map((img, i) => <GalleryImage key={i} img={img} />)}
            </div>
          </div>

          {/* ── Vinyl Wrap ── */}
          <div>
            <SectionLabel icon={Camera} label="Vinyl Wrap" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {wrapImages.map((img, i) => <GalleryImage key={i} img={img} />)}
            </div>
          </div>

          {/* ── More / Shop ── */}
          <div>
            <SectionLabel icon={Camera} label="Detailing & Shop" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {moreImages.map((img, i) => <GalleryImage key={i} img={img} />)}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass rounded-xl sm:rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Want to See More?</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Visit our shop or follow us on social media for the latest work</p>
            <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 text-sm sm:text-base">
              Book Now <span>→</span>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
