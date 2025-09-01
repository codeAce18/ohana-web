"use client"

export default function Footer() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#stats", label: "Stats" },
    { href: "#about", label: "About" },
    { href: "#approach", label: "Approach" },
    { href: "#performance", label: "Performance" },
    { href: "#vision", label: "Vision" },
    { href: "#portfolio", label: "Portfolio" },
    // { href: "#testimonials", label: "Testimonials" },
    { href: "#successful-projects", label: "Successful Projects" },
    { href: "#why-choose-us", label: "Why Choose Us" },
  ]

  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                const id = l.href.replace('#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-gray-700 hover:text-cyan-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="text-center pt-8 mt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ohanaweb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
