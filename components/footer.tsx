import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-light text-gray-500 tracking-widest uppercase">The</span>
              <span className="text-base sm:text-lg font-black text-white tracking-tight">DETAIL</span>
              <svg viewBox="0 0 40 16" className="w-5 sm:w-6 h-2.5 sm:h-3 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="0,8 8,8 12,2 16,14 20,4 24,12 28,8 40,8" />
              </svg>
              <span className="text-base sm:text-lg font-black text-white tracking-tight">CLINIC</span>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Premium auto protection & detailing. Precision craftsmanship for luxury, exotic, and performance vehicles.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs font-medium">Yelp Award Winner 2023</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Navigate</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "Services", "Pricing", "Gallery", "How To"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : item === "How To" ? "/contact" : `/${item.toLowerCase()}`} className="text-gray-500 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Paint Protection Film", "Window Tinting", "Ceramic Coating", "Auto Detailing"].map((label) => (
                <li key={label}>
                  <Link href="/services" className="text-gray-500 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3 sm:space-y-4">
              <a href="https://maps.google.com/?q=634+S+State+College+Blvd+Fullerton+CA+92831" target="_blank" rel="noopener" className="flex items-start gap-2 sm:gap-3 group">
                <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-xs sm:text-sm">
                  634 S State College Blvd<br />Fullerton, CA 92831
                </span>
              </a>
              <a href="tel:5626328290" className="flex items-center gap-2 sm:gap-3 group">
                <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-xs sm:text-sm">(562) 632-8290</span>
              </a>
              <a href="mailto:TheDetailClinic@gmail.com" className="flex items-center gap-2 sm:gap-3 group">
                <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-xs sm:text-sm break-all">TheDetailClinic@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-600 text-[10px] sm:text-xs">&copy; {new Date().getFullYear()} The Detail Clinic LLC. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-600">
            <span>Fullerton, CA</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/50" />
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
