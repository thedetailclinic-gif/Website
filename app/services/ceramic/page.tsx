import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CeramicPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Sparkles className="w-16 h-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Ceramic Coating</h1>
            <p className="text-xl text-purple-100">
              5-Year Preservation Therapy with 9H hardness rating for long-term protection and effortless maintenance
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Lock In Gloss, Repel Contaminants</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Surface Defense 5-Year Preservation Therapy uses Supreme Detail Supply's premium 5-Year 
                Ceramic Coating to create an advanced nano-shield with a 9H-rated barrier. This treatment 
                resists UV damage, oxidation, chemical etching, and minor scratches while delivering a 
                deep, reflective gloss.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The hydrophobic protection makes washing effortless and keeps your paint looking perpetually 
                rejuvenated. Our comprehensive procedure includes wash, decontamination, clay bar treatment, 
                polish, and the precise application of ceramic coating for full-panel coverage.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">9H hardness rating (diamond-like protection)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">5-year warranty coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hydrophobic surface repels water and dirt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">UV protection prevents fading</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Effortless maintenance and cleaning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Ceramic Coating Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Year Preservation Therapy</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$650</div>
                <p className="text-gray-600 mb-6">
                  Long-term treatment plan designed to lock in gloss and preserve your vehicle's finish for years.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Wash / Decontaminate / Clay / Dry</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Polish for clarity and gloss</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Ceramic Coat Application (Paint Only)</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheel Therapy</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$200</div>
                <p className="text-gray-600 mb-6">
                  Ceramic coating for wheel faces to protect against brake dust and road grime.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Wheel face deep-clean</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Surface polish</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>9H Ceramic Coating</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Leather Coating</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$250</div>
                <p className="text-gray-600 mb-6">
                  Ceramic Pro Leather coating for all leather surfaces to delay cracking and aging.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Steam to open pores</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>Scrub, shampoo & dry</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>2 Layers of Ceramic Pro</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Investment</h2>
            <p className="text-xl mb-8 text-purple-100">
              Get a free estimate and experience the benefits of premium ceramic coating
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
