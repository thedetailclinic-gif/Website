import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Car, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DetailingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Car className="w-16 h-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Auto Detailing</h1>
            <p className="text-xl text-green-100">
              Comprehensive interior and exterior detailing services to restore your vehicle to showroom condition
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Detailing Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                From basic maintenance to full restoration, our detailing services bring your vehicle back to 
                showroom condition. We use premium products and professional techniques to ensure every surface 
                is cleaned, protected, and polished to perfection.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive procedures include hand washing, wheel detailing, interior deep cleaning, 
                steam treatment, paint correction, and ceramic sealant application. Every service is tailored 
                to your vehicle's specific needs and condition.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Premium cleaning products</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Steam cleaning for deep sanitization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Paint correction and polishing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ceramic sealant protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Interior and exterior treatment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Detailing Packages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Detail</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">$120+</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Hand Wash Exterior</li>
                  <li>• Wheel Detail</li>
                  <li>• Dress Tires</li>
                  <li>• Deep Vacuum</li>
                  <li>• Sanitize Surfaces</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Medium Detail</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">$320+</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Everything in Basic</li>
                  <li>• Glaze Polish</li>
                  <li>• Steam/Scrub All Surfaces</li>
                  <li>• Steam Clean Carpets</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Detail</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">$650+</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Everything in Medium</li>
                  <li>• Engine Detail</li>
                  <li>• Polish Paint</li>
                  <li>• Shampoo/Extract All</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Paint Correction</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">$400+</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• 1-Step: $400+</li>
                  <li>• 2-Step: $1,000+</li>
                  <li>• Multi-Step: $2,000+</li>
                  <li>• Removes swirls & scratches</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Restore Your Vehicle's Beauty</h2>
            <p className="text-xl mb-8 text-green-100">
              Get a free estimate and see the difference professional detailing makes
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
