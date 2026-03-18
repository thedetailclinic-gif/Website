import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sun, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TintingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-700 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Sun className="w-16 h-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Window Tinting</h1>
            <p className="text-xl text-gray-200">
              Profection Ultra Ceramic Tint with 95-99% infrared heat rejection for maximum comfort and protection
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Elite Heat Reduction & UV Protection</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our IR Defense treatments use Profection Ultra Ceramic Tint, a premium film technology that 
                delivers 95-99% infrared heat rejection. This advanced thermal barrier dramatically reduces 
                cabin heat, glare, and UV exposure while maintaining crystal-clear visibility.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unlike traditional dyed films, ceramic tint uses nano-ceramic particles to block heat without 
                darkening your windows excessively. The result is a comfortable, cool cabin that protects your 
                interior from fading and damage while enhancing your vehicle's sleek aesthetic.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">95-99% infrared heat rejection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">99% UV protection for interior preservation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reduced glare and eye strain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced privacy and security</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lifetime warranty on film</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Tinting Packages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Treatment</h3>
                <div className="text-3xl font-bold text-gray-800 mb-3">$700</div>
                <p className="text-sm text-gray-600 mb-4">Full 360° coverage (no sunroof)</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Front Windshield</li>
                  <li>• All Side Windows</li>
                  <li>• Rear Windshield</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Perimeter Treatment</h3>
                <div className="text-3xl font-bold text-gray-800 mb-3">$550</div>
                <p className="text-sm text-gray-600 mb-4">All side windows & rear</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Excludes front windshield</li>
                  <li>• Maximum privacy</li>
                  <li>• All side & rear windows</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Front Windshield Rx</h3>
                <div className="text-3xl font-bold text-gray-800 mb-3">$250</div>
                <p className="text-sm text-gray-600 mb-4">Precision-grade treatment</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• 95-99% IR rejection</li>
                  <li>• Crystal-clear visibility</li>
                  <li>• Glare reduction</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frontline Treatment</h3>
                <div className="text-3xl font-bold text-gray-800 mb-3">$200</div>
                <p className="text-sm text-gray-600 mb-4">Front two windows</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Including pocket windows</li>
                  <li>• Enhanced comfort</li>
                  <li>• Quick installation</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get a free estimate and feel the comfort of premium ceramic tint
            </p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
