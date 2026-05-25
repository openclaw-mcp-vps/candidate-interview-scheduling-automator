export default function Page() {
  const faqs = [
    {
      q: 'Which ATS and calendar systems are supported?',
      a: 'We integrate with Greenhouse and Lever for ATS, and support Google Calendar and Microsoft Outlook for scheduling coordination.'
    },
    {
      q: 'How does timezone handling work?',
      a: 'The scheduling engine automatically detects each participant\'s timezone and finds slots that work for everyone, displaying times in each person\'s local timezone.'
    },
    {
      q: 'What happens if an interviewer cancels last minute?',
      a: 'Webhook-driven notifications instantly alert all parties and the system automatically proposes alternative slots without manual intervention.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          HR &amp; Recruiting Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Playing Calendar Tetris.<br />
          <span className="text-[#58a6ff]">Automate Interview Scheduling.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connects to your ATS and calendars to instantly find optimal interview slots across all participants — with full timezone coordination and automated notifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Automating — $18/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ['ATS Sync', 'Greenhouse & Lever'],
            ['Calendars', 'Google & Outlook'],
            ['Timezones', 'Auto-detected'],
            ['Notifications', 'Webhook-driven']
          ].map(([label, val]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{label}</div>
              <div className="text-[#8b949e] text-xs">{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to eliminate scheduling chaos</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Greenhouse & Lever ATS integration',
              'Google Calendar & Outlook sync',
              'Automatic timezone detection',
              'Multi-interviewer slot finder',
              'Webhook-driven email notifications',
              'Candidate self-scheduling links',
              'Unlimited interviews per month'
            ].map(f => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Interview Scheduling Automator. All rights reserved.
      </footer>
    </main>
  )
}
