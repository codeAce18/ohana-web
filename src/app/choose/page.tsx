import { Rocket, BarChart3, Briefcase, FileText } from "lucide-react"

export default function WhyChooseUsPage() {
  return (
    <div
      className="min-h-[70vh] relative overflow-hidden"
      style={{
        backgroundImage: "url('/S5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay over background image */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-blue-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-16 text-balance">Why choose us?</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className=" ">
              <div className="flex items-start gap-4">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">14-day risk-free trial</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    You can experience our services without any financial risk before signing any formal contract.
                  </p>
                </div>
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Flexible Recruitment Models */}
            <div className="">
              <div className="flex items-start gap-4">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">Flexible Recruitment Models</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    You can choose the model that best suits your business from flat rate, extended fee, or time and
                    materials.
                  </p>
                </div>
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Start your trial within 2 business days */}
            <div className="">
              <div className="flex items-start gap-4">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">Start your trial within 2 business days</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Not only does this save you a lot of opportunity cost, it also eliminates unnecessary waiting time.
                  </p>
                </div>
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Center - Logo/Brand */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glowing orb effect */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 relative overflow-hidden shadow-2xl shadow-blue-500/50">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path
                          d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="0.5"
                          fill="none"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                  </svg>
                </div>

                {/* Logo container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto flex items-center justify-center backdrop-blur-sm">
                      <div className="w-8 h-8 bg-white rounded-sm"></div>
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">NEWWAVE</div>
                      <div className="text-lg font-light">Solutions</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-4 rounded-full border border-cyan-300/30 animate-pulse"></div>
                <div
                  className="absolute -inset-8 rounded-full border border-blue-300/20 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* 480-hour warranty */}
            <div className="">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">480-hour warranty</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We ensure the success of your product even after the project is over.
                  </p>
                </div>
              </div>
            </div>

            {/* 100% NDA protection */}
            <div className="">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <div className="w-6 h-6 text-white flex items-center justify-center font-bold">%</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">100% NDA protection</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Before starting your ISMS - ISO 27001:2013 certification project, we will sign an NDA to keep all
                    your information confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Status Updates */}
            <div className="">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Project Status Updates</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We provide project progress reports in the form of daily, weekly, monthly reports, or whenever
                    requested by the client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}