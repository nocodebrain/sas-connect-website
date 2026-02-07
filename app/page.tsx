import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Clock, FileText, TrendingUp, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                SAS Connect
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8">
              <span className="text-blue-600 font-medium text-sm">🚀 Trusted by 200+ Australian construction companies</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Construction Workforce
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Management Made Simple
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Stop juggling spreadsheets. SAS Connect gives you real-time visibility across all your sites, 
              crews, and compliance requirements—in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-medium text-lg flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition font-medium text-lg border-2 border-slate-200">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-slate-900">89%</div>
                <div className="text-slate-600 mt-1">Admin Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900">15%</div>
                <div className="text-slate-600 mt-1">Productivity Gain</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900">24/7</div>
                <div className="text-slate-600 mt-1">Site Visibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to run construction sites
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From workforce scheduling to compliance reporting—one platform that actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Workforce Scheduling',
                description: 'Assign crews, track availability, and optimize labor allocation across all your sites in real-time.'
              },
              {
                icon: Clock,
                title: 'Digital Timesheets',
                description: 'Capture hours on-site with mobile clock-in/out. Say goodbye to manual timesheet reconciliation.'
              },
              {
                icon: TrendingUp,
                title: 'Productivity Insights',
                description: 'See which crews are hitting targets and identify bottlenecks before they cost you money.'
              },
              {
                icon: FileText,
                title: 'Social Procurement Reporting',
                description: 'Auto-generate compliant reports for Indigenous participation, apprenticeships, and diversity targets.'
              },
              {
                icon: BarChart3,
                title: 'Forecasting & Planning',
                description: 'Predict crew demand weeks ahead and avoid costly under or over-staffing.'
              },
              {
                icon: Shield,
                title: 'Audit-Ready Compliance',
                description: 'Every data point traced back to source. Pass government audits without the stress.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Stop losing money to spreadsheets and scattered data
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Most construction companies waste 10+ hours per week manually tracking workforce data, 
                reconciling timesheets, and scrambling to prepare compliance reports. That's money down the drain.
              </p>
              <div className="space-y-4">
                {[
                  'No more chasing paper timesheets',
                  'No more spreadsheet hell',
                  'No more audit panic',
                  'No more missed social procurement targets'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Built for Australian Construction</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">$10k+</div>
                  <div className="text-slate-300">Average value saved per project</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">2 hours</div>
                  <div className="text-slate-300">To get your first crew tracked</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">Zero</div>
                  <div className="text-slate-300">Training required for site teams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to stop the chaos?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join 200+ Australian construction companies using SAS Connect to manage their workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-medium text-lg">
              Book a Demo
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition font-medium text-lg border-2 border-blue-500">
              Start Free Trial
            </button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">SAS Connect</div>
              <p className="text-sm">Construction workforce management for modern Australian builders.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            © 2026 SAS Connect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
