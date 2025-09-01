export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">COMPANY INFORMATION</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Introducing our members
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Customer testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Office Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Business Content */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">BUSINESS CONTENT</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Offshore Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Lab-style development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Website creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  DX promotion support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  System Development
                </a>
              </li>
            </ul>
          </div>

          {/* Production Example */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">PRODUCTION EXAMPLE</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Web App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Website creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>

          {/* Inquiry */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">INQUIRY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  news
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  How to get started
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">
                  Pricing Model
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-end mt-16 mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">COPYRIGHT © 2021 NEWWAVE SOLUTIONS JSC. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
