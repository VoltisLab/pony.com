import React from 'react';

export default function CookiePolicyPage() {
  const toc = [
    { id: 'intro', label: 'Introduction' },
    { id: 'what-are-cookies', label: 'What Are Cookies' },
    { id: 'types', label: 'Types of Cookies' },
    { id: 'how-we-use', label: 'How We Use Cookies' },
    { id: 'manage', label: 'Manage Preferences' },
    { id: 'changes', label: 'Changes' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">
              Cookie Policy
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">Last updated: 12 August 2025</p>
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

      {/* Content */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-24">
        <div className="divide-y divide-white/10">
          {/* Introduction */}
          <section id="intro" className="scroll-mt-28 py-10 first:pt-0">
            <Header title="Introduction" />
            <p className="text-white/80 leading-relaxed">
              This Cookie Policy explains how PONY uses cookies and similar technologies to recognize you when you visit or use our services. It explains what these technologies are, why we use them, and your rights to control their use.
            </p>
          </section>

          {/* What are Cookies */}
          <section id="what-are-cookies" className="scroll-mt-28 py-10">
            <Header title="What Are Cookies?" />
            <p className="text-white/80 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website or use an app. They are widely used to make digital services work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          {/* Types of Cookies */}
          <section id="types" className="scroll-mt-28 py-10">
            <Header title="Types of Cookies We Use" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li><span className="text-white">Strictly necessary cookies:</span> essential for core functionality such as security, network management, and accessibility.</li>
              <li><span className="text-white">Performance cookies:</span> help us understand how the app is used, so we can improve it.</li>
              <li><span className="text-white">Functionality cookies:</span> remember your settings and preferences to personalize your experience.</li>
              <li><span className="text-white">Targeting/advertising cookies:</span> may be used to deliver content or ads more relevant to you and your interests (only where applicable and subject to your consent).</li>
            </ul>
          </section>

          {/* How We Use Cookies */}
          <section id="how-we-use" className="scroll-mt-28 py-10">
            <Header title="How We Use Cookies" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Authenticate users and secure the app.</li>
              <li>Remember your preferences (e.g., language, region).</li>
              <li>Analyze usage to improve performance and features.</li>
              <li>Measure the effectiveness of campaigns where applicable.</li>
            </ul>
          </section>

          {/* Manage Preferences */}
          <section id="manage" className="scroll-mt-28 py-10">
            <Header title="Manage Your Preferences" />
            <p className="text-white/80 leading-relaxed mb-4">
              You can typically set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our services, though some functionality may be limited.
            </p>
            <p className="text-white/80 leading-relaxed">
              For mobile apps, you can manage app-level permissions and ad preferences in your device settings. Where required, we present a consent banner to manage optional cookies.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="scroll-mt-28 py-10">
            <Header title="Changes to this Policy" />
            <p className="text-white/80 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect operational, legal, or regulatory changes. Please re-visit this page to stay informed.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-28 py-10 last:pb-0">
            <Header title="Contact" />
            <p className="text-white/80 leading-relaxed">
              If you have questions about our use of cookies or other technologies, please reach out via our{' '}
              <a href="/contact" className="text-[#ED1B24] hover:opacity-80 underline-offset-4 hover:underline">Contact Us</a> page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex  mb-4">
      {/* <span className="inline-block h-3 w-3 rounded-full bg-[#ED1B24]" /> */}
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}
