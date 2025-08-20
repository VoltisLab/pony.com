import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';

export default function SupportPage() {
  const toc = [
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'account', label: 'Account & Profile' },
    { id: 'safety', label: 'Safety & Reporting' },
    { id: 'billing', label: 'Billing & Subscriptions' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Support' },
  ];

  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/70 to-[#ED1B24] bg-clip-text text-transparent">
              Support
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">Guides, tips, and help—so you can focus on real connections.</p>
        </div>
      </section>

      {/* On this page (chips) */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-4">
        <div className="flex flex-wrap gap-2">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Content with visual sidebar */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-white/10">
              <section id="getting-started" className="scroll-mt-28 py-10 first:pt-0">
                <Header title="Getting Started" />
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Download the app from the App Store or Google Play.</li>
                  <li>Create a profile that highlights your interests first.</li>
                  <li>Use prompts and topics to spark better conversations.</li>
                </ul>

                {/* Quick visual cues */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['/v1.png', '/v2.png', '/v3.png'].map((src, i) => (
                    <div key={src} className="relative h-28 sm:h-36 lg:h-[11vw] rounded-xl overflow-hidden border border-white/10">
                      <Image src={src} alt={`Onboarding visual ${i + 1}`} fill className="object-cover" sizes="(min-width:1024px) 22vw, 100vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ))}
                </div>
              </section>

              <section id="account" className="scroll-mt-28 py-10">
                <Header title="Account & Profile" />
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Update your details in Settings → Profile.</li>
                  <li>Control visibility and preferences in Settings → Privacy.</li>
                  <li>To delete your account, go to Settings → Account → Delete.</li>
                </ul>
              </section>

              <section id="safety" className="scroll-mt-28 py-10">
                <Header title="Safety & Reporting" />
                <p className="text-white/80 leading-relaxed mb-4">
                  Your comfort and safety are essential. Use in-app tools to block or report users who violate our guidelines. In emergencies, contact local authorities first.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/privacy-policy" className="inline-flex">
                    <Button variant="outline" size="md" className="rounded-full">Privacy Policy</Button>
                  </a>
                  <a href="/terms" className="inline-flex">
                    <Button variant="outline" size="md" className="rounded-full">Terms of Use</Button>
                  </a>
                </div>
              </section>

              <section id="billing" className="scroll-mt-28 py-10">
                <Header title="Billing & Subscriptions" />
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Manage subscriptions via your app store account.</li>
                  <li>Refunds are handled by the platform provider where applicable.</li>
                  <li>For purchase issues, include your receipt ID when contacting support.</li>
                </ul>
              </section>

              <section id="faqs" className="scroll-mt-28 py-10">
                <Header title="FAQs" />
                <div className="space-y-4">
                  {[
                    { q: 'How do matches work?', a: 'We surface people who share interests and conversational intent. Quality over quantity.' },
                    { q: 'Can I change my location?', a: 'Yes, adjust discovery settings in Settings → Discovery.' },
                    { q: 'How do I reset my password?', a: 'Use “Forgot password” on the login screen or your sign-in provider tools.' },
                  ].map((f) => (
                    <div key={f.q} className="border border-white/10 rounded-xl p-5">
                      <h3 className="text-white font-semibold">{f.q}</h3>
                      <p className="text-white/80">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="contact" className="scroll-mt-28 py-10">
                <Header title="Contact Support" />
                <p className="text-white/80 leading-relaxed mb-4">
                  Need more help? Reach out and we&apos;ll get back as soon as possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="inline-flex">
                    <Button variant="primary" size="md" className="rounded-full">Contact Us</Button>
                  </a>
                  <a href="/cookie-policy" className="inline-flex">
                    <Button variant="outline" size="md" className="rounded-full">Cookie Policy</Button>
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Visual sidebar */}
          <aside className="hidden lg:block sticky top-28 space-y-6 h-fit">
            <div className="relative h-[22vw] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/map.png" alt="Discover people beyond geography" fill className="object-cover" sizes="(min-width:1024px) 30vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white/90 text-sm">Find your vibe anywhere</div>
            </div>
            <div className="relative h-[18vw] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/awkward.png" alt="From awkward to effortless" fill className="object-cover" sizes="(min-width:1024px) 30vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white/90 text-sm">Start with substance</div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block h-3 w-3 rounded-full bg-[#ED1B24]" />
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

