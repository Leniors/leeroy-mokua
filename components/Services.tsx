"use client";

export default function Services() {
  return (
    <section
      id="services"
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-gray-100 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Web Development Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Choose a package that fits your needs – from basic websites to
          full-scale web apps.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Starter Site */}
          <div className="flex flex-col justify-between bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border dark:border-gray-700 hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Starter Site
              </h3>
              <p className="text-2xl font-semibold text-white mb-4">
                Ksh 3,999
              </p>
              <ul className="text-sm text-left text-gray-300 space-y-2">
                <li>✦ 1–2 responsive pages</li>
                <li>✦ Minimal JavaScript</li>
                <li>✦ Clean, modern design</li>
                <li>✦ 3–5 day delivery</li>
                <li>✦ 1 revision included</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Perfect for portfolios or simple landing pages.
              </p>
            </div>
          </div>

          {/* Functional Website */}
          <div className="flex flex-col justify-between bg-gray-900 p-4 rounded-xl shadow-sm border-gray-700 hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Functional Website
              </h3>
              <p className="text-2xl font-semibold text-white mb-4">
                Ksh 5,499
              </p>
              <ul className="text-sm text-left text-gray-300 space-y-2">
                <li>✦ 1–3 responsive pages</li>
                <li>✦ Basic features (forms, sliders)</li>
                <li>✦ Email/contact form integration</li>
                <li>✦ Mobile optimized</li>
                <li>✦ 1 revisions included</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                For creators and small businesses ready to grow.
              </p>
            </div>
          </div>

          {/* Business Website */}
          <div className="flex flex-col justify-between bg-gray-900 p-4 rounded-xl shadow-sm border-gray-700 hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Business Website
              </h3>
              <p className="text-2xl font-semibold text-white mb-4">
                Ksh 9,999
              </p>
              <ul className="text-sm text-left text-gray-300 space-y-2">
                <li>✦ Up to 7 pages</li>
                <li>✦ Rich JavaScript features</li>
                <li>✦ Backend integration (Appwrite, Firebase)</li>
                <li>✦ Dashboard or CMS option</li>
                <li>✦ 2 revisions + training</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Built for startups, brands, and side hustles.
              </p>
            </div>
          </div>

          {/* Advanced Website */}
          <div className="flex flex-col justify-between bg-gray-900 p-4 rounded-xl shadow-sm border-gray-700 hover:shadow-lg transition">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Fullstack Web App
              </h3>
              <p className="text-2xl font-semibold text-white mb-4">
                Ksh 40,999
              </p>
              <ul className="text-sm text-left text-gray-300 space-y-2">
                <li>✦ Custom pages</li>
                <li>✦ Auth, API, DB, file uploads</li>
                <li>✦ Role-based access</li>
                <li>✦ 3rd party integrations</li>
                <li>✦ 3 revisions + training</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                For serious products and scalable businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
