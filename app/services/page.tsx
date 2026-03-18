import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Services — PPF, Window Tinting, Ceramic Coating & Detailing",
  description: "Explore our full range of auto protection services: paint protection film (PPF), ceramic window tinting with 95-99% IR rejection, 9H ceramic coating, paint correction, and professional detailing in Fullerton, CA.",
  alternates: { canonical: "https://thedetailclinic.com/services" },
  openGraph: {
    title: "Our Services | The Detail Clinic",
    description: "Paint protection film, ceramic window tinting, ceramic coating, and professional detailing services in Fullerton, CA.",
    url: "https://thedetailclinic.com/services",
  },
}
import { Footer } from "@/components/footer"
import { ServiceVideo } from "@/components/service-video"
import { Button } from "@/components/ui/button"
import { Shield, Sun, Sparkles, Car, ArrowRight, Zap } from "lucide-react"

const services = [
  {
    icon: Shield, title: "PAINT PROTECTION FILM", subtitle: "Impact Defense Series",
    image: "/images/content-pack/PPF-IMG_4645.jpg", imageAlt: "PPF installation on vehicle — precision application",
    imagePosition: "object-[center_30%]",
    video: { src: "/videos/content-pack/PPF-Get Paint Protection Film.mp4", title: "Why Get Paint Protection Film?" },
    desc: "Premium self-healing PPF that safeguards your vehicle's finish from rock chips, scratches, oxidation, and UV damage. Installed with surgical accuracy, the film self-heals under heat and maintains a flawless, high-gloss finish.",
    packages: [
      { name: "Total Body Armor", price: "$5,250", desc: "Complete exterior wrap — all painted panels" },
      { name: "Front End Procedure", price: "$2,250", desc: "Hood, fenders, bumper, headlights & mirrors" },
      { name: "Precision Trim Therapy", price: "$450", desc: "Gloss black, chrome, or piano-finish trim" },
      { name: "Optical Smoke Treatment", price: "From $200", desc: "Smoked PPF for headlights & taillights" },
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Sun, title: "WINDOW TINTING", subtitle: "IR Defense Series",
    image: "/images/content-pack/Ceramic Tints-P1350200.jpg", imageAlt: "Professional ceramic window tinting installation",
    imagePosition: "object-[center_40%]",
    video: { src: "/videos/content-pack/Ceramic Tints-Tims Mercedes_1080x1920.mp4", title: "Mercedes — Ceramic Tint Install" },
    desc: "Profection Ultra Ceramic Tint with 95-99% infrared heat rejection. This advanced thermal barrier blocks heat, glare, and UV rays for a cool, comfortable, and protected cabin.",
    packages: [
      { name: "Complete Treatment", price: "$700", desc: "Full 360° coverage (no sunroof)" },
      { name: "Perimeter Treatment", price: "$550", desc: "All side windows & rear windshield" },
      { name: "Front Windshield Rx", price: "$250", desc: "Precision-grade windshield treatment" },
      { name: "Frontline Treatment", price: "$200", desc: "Front two windows" },
    ],
    gradient: "from-gray-500/10 to-gray-600/10",
  },
  {
    icon: Sparkles, title: "CERAMIC COATING", subtitle: "Surface Defense Series",
    image: "/images/content-pack/Ceramic Coating-IMG_0934.jpg", imageAlt: "Ceramic coating application — premium protection",
    imagePosition: "object-[center_35%]",
    video: { src: "/videos/content-pack/Ceramic Coating-Car Wash Reel.mp4", title: "Ceramic Coating — Maintenance Wash" },
    desc: "5-Year Preservation Therapy with 9H hardness rating. This nano-shield locks in gloss, repels contaminants, and preserves your vehicle's finish with effortless maintenance.",
    packages: [
      { name: "5-Year Preservation", price: "$650", desc: "Long-term paint protection with 9H hardness" },
      { name: "Wheel Therapy", price: "$200", desc: "Ceramic coating for wheel faces" },
      { name: "Leather Coating", price: "$250", desc: "Ceramic Pro leather protection" },
      { name: "Glass Coating", price: "$300", desc: "Windshield and glass protection" },
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Car, title: "AUTO DETAILING", subtitle: "Rejuvenation & Restoration",
    image: "/images/content-pack/Detailing-P1316563.jpg", imageAlt: "Professional auto detailing in progress",
    imagePosition: "object-[center_25%]",
    video: { src: "/videos/content-pack/Detailing-RED Tesla Wash.mp4", title: "Tesla — Professional Detail Wash" },
    desc: "Comprehensive interior and exterior detailing from basic maintenance to full restoration. Premium products and professional techniques bring your vehicle back to showroom condition.",
    packages: [
      { name: "Basic Detail", price: "From $120", desc: "Hand wash, vacuum, sanitize" },
      { name: "Medium Detail", price: "From $320", desc: "Basic + polish, steam clean" },
      { name: "Full Detail", price: "From $650", desc: "Medium + engine, paint polish, extraction" },
      { name: "Paint Correction", price: "From $400", desc: "1-step, 2-step, or multi-step" },
    ],
    gradient: "from-green-500/10 to-emerald-500/10",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1628] to-black" />
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Procedures</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4">
            OUR <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SERVICES</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Comprehensive protection and detailing solutions tailored to your vehicle
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
          {services.map((service) => (
            <div key={service.title} className={`glass rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-500 bg-gradient-to-br ${service.gradient}`}>
              {/* Image banner */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className={`object-cover ${service.imagePosition}`}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
                <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 flex items-center gap-3">
                  <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-400" />
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">{service.title}</h2>
                    <p className="text-cyan-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">{service.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-6 sm:gap-8">
                  {/* Left — description + video */}
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">{service.desc}</p>
                    {service.video && (
                      <ServiceVideo src={service.video.src} title={service.video.title} />
                    )}
                  </div>

                  {/* Right — packages + CTA */}
                  <div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                      {service.packages.map((pkg) => (
                        <div key={pkg.name} className="bg-white/[0.03] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 card-hover">
                          <div className="text-cyan-400 text-base sm:text-lg font-black mb-0.5">{pkg.price}</div>
                          <div className="text-white font-bold text-xs sm:text-sm mb-1">{pkg.name}</div>
                          <div className="text-gray-500 text-[10px] sm:text-xs leading-relaxed">{pkg.desc}</div>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full px-6 sm:px-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto">
                      <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
