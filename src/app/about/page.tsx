import { Clock, Smartphone, Search, DollarSign, Heart, Users, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-100 rounded-full opacity-25"></div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              ABOUT US
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              We do things <span className="text-purple-600">differently</span>
            </h1>

            <div className="border-2 border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur mb-8">
              <p className="text-slate-700 mb-4">
                <strong>OHANA-WEB</strong> is a web production company that values "human-friendly web." The name
                "OHANA" means family in Hawaiian, and as the word suggests, our philosophy is to treat every client like
                family.
              </p>

              <p className="text-slate-700 mb-4">
                Web development often seems technical and rigid. But what we aim for is "easy-to-understand web
                production that anyone can casually consult about."
              </p>

              <p className="text-slate-700">
                Our goal is not just to make websites, but to shape our clients' ideas and deliver warmth and
                reassurance into everyday life.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-slate-800 font-medium mb-4">
                At OHANA-WEB, we create gentle web development that connects people to people:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Explaining clearly in everyday words, not difficult jargon</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    Not ending at delivery, but walking alongside clients in their ongoing operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">
                    Standing in the user's shoes to create web experiences that are gentle, clear, and beautiful
                  </span>
                </li>
              </ul>

              <p className="text-slate-700 mt-4 italic">
                By holding on to this approach, we want to be a comfortable partner clients can trust.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            {/* Image block (replacing pricing, features, and steps) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/japan.jpg"
                alt="Showcase"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
