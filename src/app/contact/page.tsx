import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';

export default function ContactPage() {
  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">
              Contact Us
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">We’re here to help.</p>
        </div>
      </section>

      {/* Visual band */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-8">
        <div className="relative h-44 sm:h-60 lg:h-[18vw] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/awkward.png"
            alt="People chatting in a cozy setting"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 70vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-3 left-4 sm:left-6">
            <h2 className="text-white text-lg sm:text-2xl font-semibold">Talk to a human.</h2>
            <p className="text-white/80 text-xs sm:text-sm">Real people. Real support. Real fast.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Cards */}
          <div className="space-y-4">
            {/* Highlight card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <div className="relative h-40 sm:h-48">
                <Image src="/cafe.png" alt="Cozy cafe support" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-semibold text-lg">Faster answers</h3>
                  <p className="text-white/80 text-xs">Most questions are resolved within 1–2 business days.</p>
                </div>
              </div>
            </div>

            {/* Contact options */}
            {[
              { h: 'Support', p: 'Account help, bug reports, safety concerns.' },
              { h: 'Partnerships', p: 'Collaborations and business inquiries.' },
              { h: 'Press', p: 'Media requests and brand resources.' },
            ].map((c) => (
              <div key={c.h} className="group border border-white/10 rounded-xl p-5 hover:border-white/30 transition-colors">
                <h3 className="text-white font-semibold mb-1">{c.h}</h3>
                <p className="text-white/80 mb-3">{c.p}</p>
                <a href="mailto:support@pony.app" className="text-[#ED1B24] hover:opacity-80 underline-offset-4 hover:underline text-sm">Email us</a>
              </div>
            ))}
          </div>

          {/* Right column: Form (UI only) */}
          <div className="relative rounded-2xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(237,27,36,0.15),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
            <div className="relative p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">Send a message</h2>
              <p className="text-white/60 text-xs sm:text-sm mb-6">We typically respond within 1–2 business days.</p>
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
        </div>
      </section>
    </main>
  );
}
