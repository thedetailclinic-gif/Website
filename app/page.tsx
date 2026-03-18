import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VideoShowcase } from "@/components/video-showcase"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Sun, Car, CheckCircle, Star, ArrowRight, Award, Zap, Phone, Play } from "lucide-react"

export const metadata: Metadata = {
  alternates: { canonical: "https://thedetailclinic.com" },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 hidden lg:block">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/videos/content-pack/Misc.-Main Edit.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Background image fallback */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/work-2.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 hex-pattern opacity-30" />

        {/* Glow orbs — hidden on mobile to prevent overflow */}
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

        {/* EKG line */}
        <div className="absolute bottom-24 sm:bottom-32 left-0 right-0 h-[2px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-heartbeat-line" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-6 sm:mb-8 animate-fade-in">
              <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs sm:text-sm font-medium">Yelp Award Winner • Fullerton, CA</span>
            </div>

            <h1 className="font-black mb-4 sm:mb-6 leading-[0.85] tracking-tighter animate-slide-up">
              <span className="block text-white text-[clamp(2.5rem,7vw,6.5rem)]">PREMIUM</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-[clamp(2.5rem,7vw,6.5rem)]">
                AUTO PROTECTION
              </span>
              <span className="block text-white/90 font-light mt-1 sm:mt-2 text-[clamp(1.25rem,3vw,3.5rem)]">& DETAILING</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: "200ms" }}>
              Professional PPF installation, ceramic window tinting, and ceramic coating. Precision craftsmanship
              for luxury, exotic, and performance vehicles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 w-full sm:w-auto">
                <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300 w-full sm:w-auto">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 animate-slide-up" style={{ animationDelay: "600ms" }}>
              {[
                { value: "5+", label: "Years Warranty" },
                { value: "99%", label: "UV Protection" },
                { value: "9H", label: "Hardness Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on short mobile screens */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-in hidden sm:flex" style={{ animationDelay: "1s" }}>
          <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Our Procedures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-3 sm:mb-4">
              PROTECTION <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SERVICES</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive automotive protection and detailing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Shield,
                title: "Paint Protection Film",
                desc: "Self-healing PPF that protects against rock chips, scratches & UV damage",
                price: "From $2,250",
                href: "/services#ppf",
                gradient: "from-cyan-500/20 to-blue-500/20",
                border: "border-cyan-500/20 hover:border-cyan-500/50",
              },
              {
                icon: Sun,
                title: "Window Tinting",
                desc: "Ceramic tint with 95-99% infrared heat rejection for max comfort",
                price: "From $200",
                href: "/services#tinting",
                gradient: "from-gray-500/20 to-gray-600/20",
                border: "border-gray-500/20 hover:border-gray-400/50",
              },
              {
                icon: Sparkles,
                title: "Ceramic Coating",
                desc: "5-year nano-ceramic shield with 9H hardness rating",
                price: "From $200",
                href: "/services#ceramic",
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/20 hover:border-purple-500/50",
              },
              {
                icon: Car,
                title: "Auto Detailing",
                desc: "Full interior & exterior restoration to showroom condition",
                price: "From $120",
                href: "/services#detailing",
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/20 hover:border-green-500/50",
              },
            ].map((service) => (
              <Link key={service.title} href={service.href} className={`group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${service.gradient} border ${service.border} transition-all duration-500 card-hover`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent" />
                <div className="relative">
                  <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-bold">{service.price}</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0d1117] relative overflow-hidden">
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Why The Detail Clinic</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                PRECISION <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">CRAFTSMANSHIP</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                We treat every vehicle like a patient — with precision, care, and the best products in the industry.
                Our shop features professional-grade hexagonal LED lighting, climate-controlled bays, and a team
                that obsesses over every detail.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Premium brands: XPEL, 3M, LLumar, SunTek, GYEON",
                  "Yelp Award Winner — highest-rated in Fullerton",
                  "Luxury & exotic vehicle specialists",
                  "5-year warranties on ceramic coatings",
                  "Subscription plans for ongoing maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Shield, label: "Self-Healing PPF", value: "Supreme Film" },
                { icon: Sun, label: "IR Rejection", value: "95-99%" },
                { icon: Sparkles, label: "Ceramic Hardness", value: "9H Rating" },
                { icon: Award, label: "Yelp Award", value: "Top Rated" },
              ].map((card) => (
                <div key={card.label} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover text-center">
                  <card.icon className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-2xl font-black text-white mb-1">{card.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Watch Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
              SEE IT IN <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ACTION</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Real work, real results — watch our team protect and transform vehicles
            </p>
          </div>

          <VideoShowcase />
        </div>
      </section>

      {/* Featured Vehicle — Corvette */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0d1117] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider">Featured Result</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4 sm:mb-6 leading-tight">
                C8 CORVETTE <span className="text-cyan-400">STINGRAY</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                This stunning Elkhart Lake Blue C8 Corvette received our full protection treatment — 
                paint protection film on all high-impact areas, ceramic window tinting for heat rejection, 
                and a 5-year ceramic coating for lasting gloss. The result speaks for itself.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {["PPF Front End", "Ceramic Tint", "5-Year Coating", "Paint Correction"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full px-6 sm:px-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto">
                <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                  Get This For Your Car <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/5">
                <div className="aspect-[16/10] relative">
                  <Image src="/images/main-corvette-3.jpg" alt="Blue C8 Corvette Stingray — 3/4 angle showing PPF protection" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-[4/3] relative">
                  <Image src="/images/main-corvette-2.jpg" alt="Blue C8 Corvette front view — flawless paint with ceramic coating" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-[4/3] relative">
                  <Image src="/images/main-img_4645.jpg" alt="Blue C8 Corvette side profile — full body protection" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-[4/3] relative">
                  <Image src="/images/content-pack/PPF-IMG_4645.jpg" alt="PPF installation detail — precision craftsmanship" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 sm:py-16 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-gray-600 text-xs uppercase tracking-[0.3em]">Trusted Brands We Use</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-16 opacity-40">
            {["XPEL", "3M", "LLumar", "SunTek", "GYEON", "STEK", "Avery", "Inozetek"].map((brand) => (
              <span key={brand} className="text-white text-sm sm:text-lg md:text-xl font-bold tracking-wider">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            READY TO <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">PROTECT</span>
            <br className="hidden sm:block" /> YOUR INVESTMENT?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get a free estimate today. We&apos;ll walk you through the best protection options for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 animate-pulse-glow w-full sm:w-auto">
              <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener">
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-full transition-all duration-300 w-full sm:w-auto">
              <a href="tel:5626328290">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
