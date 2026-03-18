import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PPFPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Shield className="w-16 h-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Paint Protection Film (PPF)</h1>
            <p className="text-xl text-blue-100">
              Premium self-healing paint protection that keeps your vehicle's finish immaculate for years
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ultimate Protection for Your Investment</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Premium In-House Paint Protection Film (Supreme) is the industry's leading self-healing 
                protection solution. This transparent barrier defends against rock chips, scratches, oxidation, 
                and UV damage while maintaining a flawless, high-gloss finish.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Installed with surgical accuracy, the film self-heals under heat and maintains your paintwork 
                factory-fresh. Whether you drive an exotic supercar, performance vehicle, luxury sedan, or daily 
                commuter, PPF ensures your investment stays protected.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Self-healing technology repairs minor scratches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">99% UV protection prevents fading and oxidation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Invisible protection maintains original paint appearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Long-term warranty coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Increases resale value</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our PPF Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Body Armor</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$5,250</div>
                <p className="text-gray-600 mb-6">
                  The ultimate restorative treatment — a complete exterior wrap using our premium self-healing PPF. 
                  Every painted surface is safeguarded.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>All Painted Panels</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Premium Supreme Film</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Full-Body Coverage</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Front End Procedure</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$2,250</div>
                <p className="text-gray-600 mb-6">
                  Preserve your vehicle's vital front surfaces with precision-applied PPF treatment. 
                  Protects where impact exposure is highest.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Full Hood</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Full Fenders</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Front Bumper</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Headlights & Mirrors</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Trim Therapy</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$450</div>
                <p className="text-gray-600 mb-6">
                  Meticulous protection treatment focused on high-impact exterior trim areas prone to 
                  scratching, fading, and swirl marks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Gloss Black Trim</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Chrome Accents</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span>Piano-Finish Trim</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Vehicle?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free estimate and discover how PPF can preserve your investment
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
