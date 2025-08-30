export default function PerformancePage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Performance Comparison</h1>
          <p className="mt-3 text-slate-600">Compare old with new</p>

          <p className="mt-6 text-slate-700">
            As consumers, we now all demand ultra-fast internet speeds on our mobile devices, intuitive search results
            and less hassle. Let's look at the difference between traditional builds vs Skyline Digital.
          </p>

          {/* Comparison blocks */}
          <div className="mt-10 space-y-8">
            {/* Speed */}
            <div className="border rounded-md p-6">
              <h2 className="text-xl font-semibold text-slate-900">Speed</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 p-4 rounded">
                  <div className="text-sm font-medium text-slate-500">Traditional Website</div>
                  <p className="mt-2 text-slate-800">
                    Traditional HTML build using WordPress and multiple tracking installs.
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded">
                  <div className="text-sm font-medium text-emerald-700">Skyline Digital</div>
                  <p className="mt-2 text-emerald-900">
                    Ultra-fast loading time with page speed below 4s.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsiveness */}
            <div className="border rounded-md p-6">
              <h2 className="text-xl font-semibold text-slate-900">User Responsiveness</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 p-4 rounded">
                  <div className="text-sm font-medium text-slate-500">Traditional Website</div>
                  <p className="mt-2 text-slate-800">
                    Pages provide personalized content but require a page reload for every user action.
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded">
                  <div className="text-sm font-medium text-emerald-700">Skyline Digital</div>
                  <p className="mt-2 text-emerald-900">
                    Dynamically loads new content as users interact — no page reload needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Native feel */}
            <div className="border rounded-md p-6">
              <h2 className="text-xl font-semibold text-slate-900">Native Experience</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 p-4 rounded">
                  <div className="text-sm font-medium text-slate-500">Traditional Website</div>
                  <p className="mt-2 text-slate-800">
                    Traditional builds try to emulate a native experience but generally fail.
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded">
                  <div className="text-sm font-medium text-emerald-700">Skyline Digital</div>
                  <p className="mt-2 text-emerald-900">
                    Our websites feel like native applications on both desktop and mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}