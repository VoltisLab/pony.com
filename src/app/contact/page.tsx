import React from 'react';
import Button from '@/components/shared/Button';

export default function ContactPage() {
  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/70 to-[#ED1B24] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">Were here to help.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Options */}
          <div className="space-y-4">
            {[
              { h: 'Support', p: 'Account help, bug reports, safety concerns.' },
              { h: 'Partnerships', p: 'Collaborations and business inquiries.' },
              { h: 'Press', p: 'Media requests and brand resources.' },
            ].map((c) => (
              <div key={c.h} className="border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-1">{c.h}</h3>
                <p className="text-white/80 mb-3">{c.p}</p>
                <a href="mailto:support@pony.app" className="text-[#ED1B24] hover:opacity-80 underline-offset-4 hover:underline text-sm">Email us</a>
              </div>
            ))}
          </div>

          {/* Simple form (UI only) */}
          <div className="border border-white/10 rounded-xl p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Send a message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-1">Name</label>
                <input className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/60" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">Email</label>
                <input type="email" className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/60" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">Message</label>
                <textarea rows={5} className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/60" placeholder="How can we help?" />
              </div>
              <div className="flex gap-3">
                <Button variant="primary" size="md" className="rounded-full">Send</Button>
                <a href="/support" className="inline-flex">
                  <Button variant="outline" size="md" className="rounded-full">Visit Support</Button>
                </a>
              </div>
              <p className="text-white/50 text-xs">Note: This form is UI only. Hook up to your backend or a form service to enable submissions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

