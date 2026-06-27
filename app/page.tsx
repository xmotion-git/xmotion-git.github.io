import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      
      {/* 1. HERO SECTION */}
      <header className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            <span className="text-blue-600">JOSEPH CHRISTIAN PADIN</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 mt-2">
            Technical Virtual Assistant & Operations Specialist
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl">
            I help businesses, agencies, and entrepreneurs optimize their workflows, manage technical platforms, and automate repetitive tasks so they can focus on scaling.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book a Call
            </a>
            <a href="#projects" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              View My Work
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src="/Me.png"
            alt="Joseph Christian Padin"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </header>

      {/* 2. SERVICES & TECH STACK SECTION */}
      <section className="bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How I Can Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-blue-600 text-2xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workflow Automation</h3>
              <p className="text-gray-600 text-sm">Connecting apps and streamlining processes to eliminate manual data entry.</p>
              <p className="mt-3 text-xs font-semibold text-blue-600">Tools: Zapier, Make (Integromat), Hubspot</p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-blue-600 text-2xl mb-3">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web & CMS Operations</h3>
              <p className="text-gray-600 text-sm">Managing content updates, basic frontend edits, and maintenance tracking.</p>
              <p className="mt-3 text-xs font-semibold text-blue-600">Tools: WordPress, Next.js, Notion, Airtable</p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-blue-600 text-2xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data & Email Systems</h3>
              <p className="text-gray-600 text-sm">Setting up email sequences, managing CRMs, and generating data reports.</p>
              <p className="mt-3 text-xs font-semibold text-blue-600">Tools: Mailchimp, ConvertKit, Excel/Sheets</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS SECTION */}
      <section id="projects" className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Technical Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Automation</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Lead Generation Pipeline</h3>
              <p className="text-gray-600 text-sm mb-4">
                Built an automated workflow that syncs Facebook Ads leads directly into a client's CRM, triggers a Slack alert for the sales team, and drafts a personalized onboarding email.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-gray-500">
                <span>Impact: Saved 5+ hours/week</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-600">Web Development</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Client Dashboard Mockup</h3>
              <p className="text-gray-600 text-sm mb-4">
                Developed a fast, modern static interface using React to show potential clients how their project metrics and tasks can be tracked transparently.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-gray-500">
                <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONTACT / CALL TO ACTION */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Delegate Your Tech Overhead?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's jump on a quick 15-minute discovery call to discuss your current bottleneck and how I can help resolve it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:your.email@example.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition border border-gray-700">
              LinkedIn
            </a>
          </div>
          <p className="mt-12 text-xs text-gray-500">
            © {new Date().getFullYear()} Joseph Christian Padin. All rights reserved. Hosted on GitHub Pages.
          </p>
        </div>
      </footer>

    </div>
  );
}