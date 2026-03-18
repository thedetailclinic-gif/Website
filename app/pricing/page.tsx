import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Sun, Sparkles, Car, CheckCircle, ArrowRight, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing — Transparent Service Packages & Rates",
  description: "View transparent pricing for PPF ($2,250–$5,250), ceramic window tinting ($200–$700), ceramic coating ($200–$650), auto detailing ($120–$650), paint correction, and subscription plans at The Detail Clinic in Fullerton, CA.",
  alternates: { canonical: "https://thedetailclinic.com/pricing" },
  openGraph: {
    title: "Pricing | The Detail Clinic",
    description: "Transparent pricing for all auto protection and detailing services. No hidden fees.",
    url: "https://thedetailclinic.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1628] to-black" />
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
            <DollarSign className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">PRICING</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Premium protection at transparent prices. No hidden fees.
          </p>
        </div>
      </section>

      {/* PPF */}
      <section className="py-10 sm:py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-white">PAINT PROTECTION FILM</h2>
              <p className="text-cyan-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Impact Defense Series</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {[
              { name: "Total Body Armor", price: "$5,250", items: ["All Painted Panels", "Premium Supreme Film", "Self-Healing Tech", "Full Coverage"], popular: true },
              { name: "Front End Procedure", price: "$2,250", items: ["Full Hood", "Full Fenders", "Front Bumper", "Headlights & Mirrors"], popular: false },
              { name: "Precision Trim Therapy", price: "$450", items: ["Gloss Black Trim", "Chrome Accents", "Piano-Finish Trim", "UV Protection"], popular: false },
            ].map((pkg) => (
              <div key={pkg.name} className={`glass rounded-xl sm:rounded-2xl p-6 sm:p-8 border ${pkg.popular ? "border-cyan-500/50 animate-pulse-glow" : "border-white/5"} card-hover relative`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full uppercase whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-4 sm:mb-6">{pkg.price}</div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full rounded-xl font-bold ${pkg.popular ? "bg-cyan-500 hover:bg-cyan-400 text-black" : "bg-white/5 hover:bg-white/10 text-white"}`}>
                  <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener">Book Now</a>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs sm:text-sm">
            <strong className="text-gray-400">Optical Smoke Treatment:</strong> Front or Rear from $200 • Front and Rear from $350
          </p>
        </div>
      </section>

      {/* Tinting */}
      <section className="py-10 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Sun className="w-8 sm:w-10 h-8 sm:h-10 text-gray-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-white">WINDOW TINTING</h2>
              <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">IR Defense • Profection Ultra Ceramic</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "Complete", price: "$700", desc: "Full 360° (no sunroof)" },
              { name: "Perimeter", price: "$550", desc: "All side + rear" },
              { name: "Windshield Rx", price: "$250", desc: "Front windshield" },
              { name: "Frontline", price: "$200", desc: "Front two windows" },
            ].map((pkg) => (
              <div key={pkg.name} className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/5 card-hover">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{pkg.price}</div>
                <div className="text-cyan-400 font-bold text-xs sm:text-sm mb-1 sm:mb-2">{pkg.name}</div>
                <div className="text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-4">{pkg.desc}</div>
                <div className="text-[10px] sm:text-xs text-gray-600">95-99% IR rejection</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-4">
            <strong className="text-gray-400">Tesla Model X / Cybertruck Windshield:</strong> $850
          </p>
        </div>
      </section>

      {/* Ceramic & Detailing */}
      <section className="py-10 sm:py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400 flex-shrink-0" />
                <div>
                  <h2 className="text-lg sm:text-2xl font-black text-white">CERAMIC COATING</h2>
                  <p className="text-purple-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Surface Defense Series</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { name: "5-Year Preservation Therapy", price: "$650" },
                  { name: "Wheel Therapy", price: "$200" },
                  { name: "Leather Coating", price: "$250" },
                  { name: "Glass Coating", price: "$300" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center glass rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 border border-white/5 card-hover">
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">{item.name}</span>
                    <span className="text-cyan-400 font-black text-sm sm:text-base ml-2 flex-shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Car className="w-8 sm:w-10 h-8 sm:h-10 text-green-400 flex-shrink-0" />
                <div>
                  <h2 className="text-lg sm:text-2xl font-black text-white">AUTO DETAILING</h2>
                  <p className="text-green-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">*Price varies by vehicle</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { name: "Basic Detail", price: "From $120" },
                  { name: "Medium Detail", price: "From $320" },
                  { name: "Full Detail", price: "From $650" },
                  { name: "1-Step Paint Correction", price: "From $400" },
                  { name: "2-Step Paint Correction", price: "From $1,000" },
                  { name: "Multi-Step Correction", price: "From $2,000" },
                  { name: "Headlight Restoration", price: "From $150" },
                  { name: "Engine Detail", price: "From $85" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center glass rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 border border-white/5 card-hover">
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">{item.name}</span>
                    <span className="text-cyan-400 font-black text-xs sm:text-sm ml-2 flex-shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section className="py-10 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">SUBSCRIPTION <span className="text-cyan-400">PLANS</span></h2>
            <p className="text-gray-500 text-xs sm:text-sm">One detail per month — keep your vehicle pristine year-round</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "3 Month", price: "$300", items: ["1 Basic Detail", "2 Maintenance Details"] },
              { name: "6 Month", price: "$600", items: ["1 Medium Detail", "1 Basic Detail", "4 Maintenance Details"] },
              { name: "12 Month", price: "$1,200", items: ["2 Medium Details", "2 Basic Details", "8 Maintenance Details", "1 Engine Detail"] },
            ].map((plan) => (
              <div key={plan.name} className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 card-hover text-center">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-4 sm:mb-6">{plan.price}</div>
                <ul className="space-y-2 mb-6 sm:mb-8 text-left">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold">
                  <a href="https://referral.rinzapp.com/referral/loyalpine" target="_blank" rel="noopener">Subscribe</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            READY TO <span className="text-cyan-400">START?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">All card transactions include a 2.9% processing fee</p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto">
            <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener">Book Now <ArrowRight className="w-5 h-5 ml-2" /></a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
