import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Scheduling Automator — Automate interview coordination',
  description: 'Automatically coordinate interview schedules across multiple interviewers and candidates with timezone handling. Integrates with Greenhouse, Lever, Google Calendar, and Outlook.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="92c7f6e6-9847-4d28-89ec-a9f64bae1fde"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
