import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QRCodeBlock } from "@/components/qr-code"
import { MapPin, Phone, Mail, Clock, Send, Smartphone, Globe, Tag, CalendarCheck, BarChart3, Sparkles, ExternalLink, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Book & Contact — Schedule Your Service",
  description: "Book your auto detailing, PPF, window tinting, or ceramic coating service at The Detail Clinic in Fullerton, CA. Book online 24/7 via the Rinz app or call (562) 632-8290.",
  alternates: { canonical: "https://thedetailclinic.com/contact" },
  openGraph: {
    title: "Book & Contact | The Detail Clinic",
    description: "Book online instantly, download our app, or call (562) 632-8290. Located at 634 S State College Blvd, Fullerton, CA 92831.",
    url: "https://thedetailclinic.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1628] to-black" />
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-6">
            <Send className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Scan · Book · Enjoy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4">
            BOOK YOUR <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SERVICE</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
            Book online instantly, download our app, or reach out directly
          </p>

          <a
            href="https://www.rinzapp.com/order/loyalpine"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 text-base sm:text-lg animate-pulse-glow w-full sm:w-auto max-w-md"
          >
            Book Now
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* QR Codes */}
      <section className="py-8 sm:py-12 bg-[#0d1117] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <div className="flex-shrink-0">
                <QRCodeBlock url="https://referral.rinzapp.com/referral/loyalpine" size={100} />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-bold text-sm sm:text-base">Download the App</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-2 sm:mb-3">
                  Track orders, manage appointments, and book on the go.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400" />iOS</span>
                  <span className="text-gray-700">·</span>
                  <span className="flex items-center gap-1.5 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />Android Soon</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <div className="flex-shrink-0">
                <QRCodeBlock url="https://www.rinzapp.com/order/loyalpine" size={100} />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-bold text-sm sm:text-base">Book Online</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-2 sm:mb-3">
                  No app needed — browse services, pick a time, and book from your browser.
                </p>
                <a
                  href="https://www.rinzapp.com/order/loyalpine"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-colors"
                >
                  rinzapp.com/order/loyalpine
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book */}
      <section className="py-6 sm:py-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {[
              { icon: Tag, label: "Exclusive Discounts" },
              { icon: CalendarCheck, label: "24/7 Online Booking" },
              { icon: BarChart3, label: "Real-Time Tracking" },
              { icon: Sparkles, label: "Subscription Savings" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5">
                <item.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400 text-[10px] sm:text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              GET IN <span className="text-cyan-400">TOUCH</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: MapPin, title: "Location", line1: "634 S State College Blvd", line2: "Fullerton, CA 92831", href: "https://maps.google.com/?q=634+S+State+College+Blvd+Fullerton+CA+92831" },
              { icon: Phone, title: "Phone", line1: "(562) 632-8290", line2: "Call or text", href: "tel:5626328290" },
              { icon: Mail, title: "Email", line1: "TheDetailClinic", line2: "@gmail.com", href: "mailto:TheDetailClinic@gmail.com" },
              { icon: Clock, title: "Hours", line1: "Mon-Fri 9-6", line2: "Sat 9-5 · Sun Appt", href: undefined },
            ].map((item) => {
              const Tag = item.href ? "a" : "div"
              return (
                <Tag
                  key={item.title}
                  {...(item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener" : undefined } : {})}
                  className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 text-center card-hover group"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">{item.line1}</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs">{item.line2}</p>
                </Tag>
              )
            })}
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 max-w-sm sm:max-w-md mx-auto">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
            <span className="text-gray-400 text-[10px] sm:text-xs">
              <span className="text-cyan-400 font-bold">Yelp Award Winner 2023</span> — Highest-rated on Yelp
            </span>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-16 bg-gradient-to-t from-[#0d1117] to-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Ready to protect your vehicle?</p>
          <a
            href="https://www.rinzapp.com/order/loyalpine"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-black text-base sm:text-lg transition-colors"
          >
            Book Your Appointment
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-gray-700 text-xs mt-6 sm:mt-8">The Detail Clinic · Powered by <span className="text-gray-500 font-bold">RINZ</span></p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
