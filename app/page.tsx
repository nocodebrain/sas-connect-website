import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, FileCheck, Shield, TrendingUp, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">
                SAS Connect
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#solutions" className="text-slate-600 hover:text-slate-900 font-medium">Solutions</Link>
              <Link href="#platform" className="text-slate-600 hover:text-slate-900 font-medium">Platform</Link>
              <Link href="#why" className="text-slate-600 hover:text-slate-900 font-medium">Why SAS</Link>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 font-medium">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Turn workforce data into audit-ready compliance reports
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stop scrambling with spreadsheets when auditors come knocking. SAS Connect captures workforce data at source and automatically generates traceable social procurement reports for government contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-md hover:bg-slate-800 font-medium text-lg inline-flex items-center justify-center">
                See how it works
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-md hover:bg-slate-50 font-medium text-lg border-2 border-slate-300">
                Request Demo
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-slate-600 text-sm mt-1">Audit traceability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">90%</div>
              <div className="text-slate-600 text-sm mt-1">Less admin time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">Real-time</div>
              <div className="text-slate-600 text-sm mt-1">Compliance visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Government contracts demand social procurement reporting. Most companies still use spreadsheets.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Every government construction contract in Australia requires detailed reporting on Indigenous employment, apprenticeships, and workforce diversity. The current approach? Manual data entry, disconnected spreadsheets, and weeks of admin scrambling before audits.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Manual spreadsheet tracking</div>
                    <div className="text-slate-600 text-sm">No single source of truth, prone to errors</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Disconnected workforce data</div>
                    <div className="text-slate-600 text-sm">Site, payroll, HR systems don't talk</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Audit panic mode</div>
                    <div className="text-slate-600 text-sm">Weeks spent reconstructing evidence trails</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Compliance risk</div>
                    <div className="text-slate-600 text-sm">Missing targets can cost you future contracts</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 text-white p-12 rounded-lg">
              <div className="text-5xl font-bold mb-4">$50k+</div>
              <p className="text-lg text-slate-300 mb-8">
                Average cost of social procurement admin burden per major project—not counting the risk of failed audits or missed contract renewals.
              </p>
              <div className="border-t border-slate-700 pt-8">
                <div className="text-sm text-slate-400 mb-2">What if you could:</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Capture workforce data once, at source</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Generate compliant reports automatically</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Pass audits with full traceability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Role */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Australian construction's compliance reality
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're a Tier 1 contractor managing multiple sites or a project manager tracking apprenticeships, SAS Connect gives you the tools to stay compliant without the admin burden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition">
              <div className="text-2xl font-bold text-slate-900 mb-2">Tier 1 Contractors</div>
              <p className="text-slate-600 mb-6">
                Oversee social procurement compliance across all projects with real-time visibility and automated reporting.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Portfolio-wide compliance dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Multi-site workforce tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Automated government reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Audit-ready evidence chains</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition">
              <div className="text-2xl font-bold text-slate-900 mb-2">Head Contractors</div>
              <p className="text-slate-600 mb-6">
                Win and deliver government contracts without drowning in compliance admin. Keep sites running, not reporting.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Site-based workforce capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Indigenous employment tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Apprenticeship milestone tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>One-click compliance exports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition">
              <div className="text-2xl font-bold text-slate-900 mb-2">Project Managers</div>
              <p className="text-slate-600 mb-6">
                Track workforce compliance in real-time without chasing spreadsheets. Know where you stand, always.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Real-time compliance metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Mobile workforce check-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Diversity target monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Instant status reports for stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              From site check-in to audit approval
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              SAS Connect connects the dots between workforce data and compliance reporting—automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Workforce Data Capture</h3>
                  <p className="text-slate-600">
                    Mobile check-in at site. Capture workforce composition, Indigenous status, apprenticeships, and diversity data at source—no manual entry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Compliance Tracking</h3>
                  <p className="text-slate-600">
                    See how you're tracking against social procurement targets in real-time. Indigenous participation, apprenticeship hours, diversity metrics—all in one dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Reporting</h3>
                  <p className="text-slate-600">
                    Generate government-compliant social procurement reports with one click. Indigenous employment breakdowns, apprenticeship progress, diversity metrics—pre-formatted and ready to submit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Audit-Ready Evidence</h3>
                  <p className="text-slate-600">
                    Every data point traced back to source. When auditors come knocking, show them a complete, traceable record of workforce participation—not a reconstructed spreadsheet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-12 rounded-lg flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-sm text-slate-400 mb-2">The old way</div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Site managers email timesheets</li>
                  <li>• HR consolidates spreadsheets</li>
                  <li>• PM manually calculates compliance metrics</li>
                  <li>• Compliance team builds reports from scratch</li>
                  <li>• Auditors request evidence → panic mode</li>
                </ul>
                <div className="text-slate-500 text-sm mt-4">Result: Weeks of admin, high error risk</div>
              </div>

              <div className="border-t border-slate-700 pt-8">
                <div className="text-sm text-green-400 mb-2">The SAS Connect way</div>
                <ul className="space-y-2 text-white font-medium">
                  <li>• Workforce checks in via mobile</li>
                  <li>• Data flows to compliance dashboard</li>
                  <li>• Reports generate automatically</li>
                  <li>• Auditors get full evidence trail</li>
                </ul>
                <div className="text-green-400 text-sm mt-4">Result: 90% less admin, zero audit risk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built specifically for Australian social procurement
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Generic workforce tools don't understand social procurement. SAS Connect was built from the ground up for Australian government contract compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Compliance-First Design</h3>
              <p className="text-slate-600 text-sm">
                Not a generic workforce tool. Built specifically for Australian social procurement requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">100% Traceable</h3>
              <p className="text-slate-600 text-sm">
                Every metric traced back to source. Pass audits with confidence, not scrambling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Visibility</h3>
              <p className="text-slate-600 text-sm">
                Know where you stand against targets today, not when the quarterly report is due.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Built for Scale</h3>
              <p className="text-slate-600 text-sm">
                Track one site or one hundred. SAS Connect scales with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop losing money to compliance admin
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            See how SAS Connect turns workforce data into audit-ready reports—automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-md hover:bg-slate-100 font-medium text-lg">
              Request Demo
            </button>
            <button className="bg-slate-800 text-white px-8 py-4 rounded-md hover:bg-slate-700 font-medium text-lg border-2 border-slate-700">
              See Platform Overview
            </button>
          </div>
          <p className="text-slate-400 mt-6 text-sm">
            Used by Australian construction companies winning and delivering government contracts
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-slate-900 mb-4">SAS Connect</div>
              <p className="text-sm">Social procurement compliance for Australian construction.</p>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-slate-900">Workforce Tracking</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Compliance Reporting</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Audit Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-slate-900">About</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Contact</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-slate-900">Documentation</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div>© 2026 SAS Connect. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
